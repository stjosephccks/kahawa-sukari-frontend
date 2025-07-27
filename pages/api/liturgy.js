import mongooseConnect from "@/lib/mongoose";
import { LiturgicalProgram } from "@/models/Liturgical";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
    try {
        await mongooseConnect();
        const liturgicalDocument = await LiturgicalProgram.find({ published: true });
        res.json(liturgicalDocument);

    } catch (error) {
        return new NextResponse('Error fetching announcement ', { status: 500 })
    }
}