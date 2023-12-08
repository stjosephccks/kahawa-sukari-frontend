import { mongooseConnect } from "@/lib/mongoose";
import { Sunday } from "@/models/Sunday";


export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        await mongooseConnect();
        const data = await Sunday.find({}); // Replace YourModel with your actual MongoDB model
        res.status(200).json({ success: true, data });
      } catch (error) {
        res.status(500).json({ success: false, error });
      }
      break;
    default:
      res.status(405).json({ success: false });
      break;
  }
}
