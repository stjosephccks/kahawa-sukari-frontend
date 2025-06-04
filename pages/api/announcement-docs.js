import mongooseConnect from "@/lib/mongoose";
import { AnnouncementDocument } from "@/models/AnnouncementDocument";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
    try {
        await mongooseConnect();
        const announcementDocument = await AnnouncementDocument.find({});
        res.json(announcementDocument);

    } catch (error) {
        return new NextResponse('Error fetching announcement ', { status: 500 })
    }
}