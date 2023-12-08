import mongooseConnect from "@/lib/mongoose";
import Announcement from "@/models/Announcements";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
  const {method}= req
  await mongooseConnect();
  if(method==='GET'){
    const announcements = await Announcement.find().populate('sunday');
    res.json(announcements);

  }
 
}
