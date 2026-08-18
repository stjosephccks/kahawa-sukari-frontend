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

        // Normalize phone number using smsService
        const cleanPhone = smsService.normalizePhoneNumber(phoneNumber);

        // Check if phone number belongs to a zaka member (try multiple formats)
        const zaka = await Zaka.findOne({
          $or: [
            { mobileNumber: cleanPhone },
            { mobileNumber: phoneNumber.replace(/[\s\-\(\)]/g, '') },
            { mobileNumber: phoneNumber.replace(/[\s\-\(\)]/g, '').replace(/^\+/, '') }
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
        try {
          const smsResult = await smsService.sendOTP(cleanPhone, generatedOTP);
          if (!smsResult.success) {
            return res.status(500).json({ 
              error: 'Failed to send OTP via SMS',
              details: smsResult.error
            });
          }
        } catch (smsError) {
          console.error('SMS sending error:', smsError);
          return res.status(500).json({ 
            error: 'Failed to send OTP via SMS',
            details: smsError.message
          });
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

        // Normalize phone number using smsService
        const cleanPhone = smsService.normalizePhoneNumber(phoneNumber);

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
