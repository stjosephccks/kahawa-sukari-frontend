import mongooseConnect from "@/lib/mongoose";
import User from "@/models/User";
import { Zaka } from "@/models/Zaka";
import smsService from "@/lib/smsService";

export default async function handler(req, res) {
  const { method } = req;

  try {
    await mongooseConnect();

    if (method === 'POST') {
      const { action, phoneNumber, otp } = req.body;

      if (action === 'send_otp') {
        // Send OTP to phone number
        if (!phoneNumber) {
          return res.status(400).json({ error: 'Phone number is required' });
        }

        // Normalize phone number
        let cleanPhone = phoneNumber.replace(/[\s\-\(\)]/g, '');
        if (cleanPhone.startsWith('+254')) {
          cleanPhone = cleanPhone.substring(1);
        } else if (cleanPhone.startsWith('0')) {
          cleanPhone = '254' + cleanPhone.substring(1);
        }

        // Check if phone number belongs to a zaka member
        const zaka = await Zaka.findOne({
          $or: [
            { mobileNumber: cleanPhone },
            { mobileNumber: phoneNumber.replace(/[\s\-\(\)]/g, '') }
          ]
        });

        if (!zaka) {
          return res.status(404).json({ error: 'Phone number not found in zaka records' });
        }

        // Find or create user
        let user = await User.findOne({ phoneNumber: cleanPhone });
        if (!user) {
          user = await User.create({ 
            phoneNumber: cleanPhone,
            zakaNumber: zaka.zakaNumber
          });
        } else {
          user.zakaNumber = zaka.zakaNumber;
        }

        // Generate and send OTP
        const generatedOTP = user.generateOTP();
        await user.save();

        // Send OTP via SMS
        const message = `Your St. Joseph Church verification code is: ${generatedOTP}. Valid for 10 minutes. Do not share this code.`;
        
        try {
          await smsService.sendSingleSMS(cleanPhone, message);
        } catch (smsError) {
          console.error('SMS sending error:', smsError);
          // Continue even if SMS fails (for testing)
        }

        return res.json({ 
          success: true, 
          message: 'OTP sent successfully',
          phoneNumber: cleanPhone
        });
      }

      if (action === 'verify_otp') {
        // Verify OTP
        if (!phoneNumber || !otp) {
          return res.status(400).json({ error: 'Phone number and OTP are required' });
        }

        // Normalize phone number
        let cleanPhone = phoneNumber.replace(/[\s\-\(\)]/g, '');
        if (cleanPhone.startsWith('+254')) {
          cleanPhone = cleanPhone.substring(1);
        } else if (cleanPhone.startsWith('0')) {
          cleanPhone = '254' + cleanPhone.substring(1);
        }

        const user = await User.findOne({ phoneNumber: cleanPhone });
        if (!user) {
          return res.status(404).json({ error: 'User not found. Please request a new OTP.' });
        }

        const verificationResult = user.verifyOTP(otp);
        
        if (verificationResult.success) {
          // Get zaka details
          const zaka = await Zaka.findOne({ zakaNumber: user.zakaNumber });
          
          return res.json({
            success: true,
            message: verificationResult.message,
            user: {
              phoneNumber: user.phoneNumber,
              zakaNumber: user.zakaNumber,
              zakaDetails: zaka
            }
          });
        } else {
          return res.status(400).json({ error: verificationResult.message });
        }
      }

      return res.status(400).json({ error: 'Invalid action specified' });
    }

    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${method} not allowed` });
  } catch (error) {
    console.error('Auth OTP error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
