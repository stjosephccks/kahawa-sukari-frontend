import mongooseConnect from "@/lib/mongoose";
import Announcement from "@/models/Announcements";
import { NextResponse } from "next/server";
import Sunday from "@/models/Sunday";
export default async function handler(req, res) {
  try {
    await mongooseConnect();
    const announcements = await Announcement.find({})
      .populate("sunday", "sunday", Sunday)
      .lean();
    res.json(announcements);
  } catch (error) {
    return new NextResponse("Error fetching Announcements", { status: 500 });
  }
}
