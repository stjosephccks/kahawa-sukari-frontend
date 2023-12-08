import { mongooseConnect } from "@/lib/mongoose";
import { Sunday } from "@/models/Sunday";


export default async function handler(req, res) {
  
  try {
    await mongooseConnect();
    const sundays = await Sunday.find().exec();
    res.json(sundays);
  } catch (error) {
    console.error('Error fetching Sundays:', error);
    return new NextResponse('Error fetching Sundays', { status: 500 });
  }
}
