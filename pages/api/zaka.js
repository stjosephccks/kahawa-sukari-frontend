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

      // Search for the normalized phone number in both mobileNumber and mobileNumber2
      const zaka = await Zaka.findOne({
        $or: [
          { mobileNumber: cleanPhone },
          { mobileNumber: `+254${cleanPhone}` },
          { mobileNumber: `0${cleanPhone}` },
          { mobileNumber: cleanPhone.replace(/^254/, '') },
          { mobileNumber: cleanPhone.replace(/^0/, '') },
          // Also search in mobileNumber2 if it exists
          { mobileNumber2: cleanPhone },
          { mobileNumber2: `+254${cleanPhone}` },
          { mobileNumber2: `0${cleanPhone}` },
          { mobileNumber2: cleanPhone.replace(/^254/, '') },
          { mobileNumber2: cleanPhone.replace(/^0/, '') }
        ]
      }).lean();

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
