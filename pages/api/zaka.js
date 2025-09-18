import mongooseConnect from "@/lib/mongoose";
import { Zaka } from "@/models/Zaka";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
  const { method } = req;

  try {
    await mongooseConnect();

    if (method === 'GET') {
      const { phone } = req.query;

      if (!phone) {
        return res.status(400).json({
          error: 'Phone number is required'
        });
      }

      // Clean and normalize the phone number for consistent search
      let cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
      
      // Handle different phone number formats
      // Remove country code prefix if present (+254)
      if (cleanPhone.startsWith('+254')) {
        cleanPhone = cleanPhone.substring(4);
      }
      
      // Remove leading zero if present (0790... -> 790...)
      if (cleanPhone.startsWith('0')) {
        cleanPhone = cleanPhone.substring(1);
      }
      
      // Ensure we have at least 9 digits
      if (cleanPhone.length < 9) {
        return res.status(400).json({
          error: 'Phone number must be at least 9 digits'
        });
      }

      // Normalize to last 9 digits for robust matching
      const normalizePhone = (num) => {
        if (!num) return '';
        // Remove all non-digit characters
        let digits = num.replace(/\D/g, '');
        // Always take the last 9 digits (Kenyan numbers)
        return digits.slice(-9);
      };

      const normalizedInput = normalizePhone(phone);
      if (normalizedInput.length < 9) {
        return res.status(400).json({
          error: 'Phone number must be at least 9 digits'
        });
      }

      // Find all zakas where either mobileNumber or mobileNumber2 contains the last 9 digits
      const candidates = await Zaka.find({
        $or: [
          { mobileNumber: { $regex: normalizedInput } },
          { mobileNumber2: { $regex: normalizedInput } }
        ]
      }).lean();

      // Now filter for exact match on normalized value
      const zaka = candidates.find(z =>
        normalizePhone(z.mobileNumber) === normalizedInput ||
        normalizePhone(z.mobileNumber2) === normalizedInput
      );

      if (!zaka) {
        return res.status(404).json({
          error: 'No zaka found with this phone number'
        });
      }

      res.status(200).json(zaka);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).json({
        error: `Method ${method} not allowed`
      });
    }
  } catch (error) {
    console.error('Error searching zaka by phone:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
}
