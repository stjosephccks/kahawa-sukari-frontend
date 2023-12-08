import mongooseConnect from "@/lib/mongoose";
import Announcement from "@/models/Announcements";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
  try {
    await mongooseConnect();
res.json(await Announcement.find().populate('sunday'))
  } catch (error) {
    return new NextResponse('Error fetching Announcements', { status: 500 });
  }
}

