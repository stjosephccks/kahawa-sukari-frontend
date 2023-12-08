import mongooseConnect from "@/lib/mongoose";
import Announcement from "@/models/Announcements";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
  
  try {
    await mongooseConnect();
    const announcements = await Announcement.find()
    res.json(announcements);
  } catch (error) {
    console.error('Error fetching Announcements:', error);
    return new NextResponse('Error fetching Announcements', { status: 500 });
  }
}
