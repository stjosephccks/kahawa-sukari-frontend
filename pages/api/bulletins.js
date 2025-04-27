import mongooseConnect from "@/lib/mongoose";
import Bulletin from "@/models/Bulletin";

export default async function handler(req, res) {
  const { method } = req;
  try {
    await mongooseConnect();

    if (method === "GET") {
      console.log("API Query params:", req.query);

      if (req.query?.id) {
        const bulletin = await Bulletin.findOne({ _id: req.query.id });
        console.log("Found by ID:", bulletin);
        res.json(bulletin);
      } else if (req.query?.title) {
        // Find by title, case-insensitive and exact match
        const bulletin = await Bulletin.findOne({
          title: { $regex: `^${req.query.title}$`, $options: "i" },
        });
        console.log("Found by title:", bulletin);
        res.json(bulletin);
      } else {
        const bulletins = await Bulletin.find({}).sort({ _id: -1 }).exec();
        console.log("Found all bulletins:", bulletins.length);
        res.json(bulletins);
      }
    }
  } catch (error) {
    console.error("Error fetching Bulletins:", error);
    res.status(500).json({ error: "Error fetching Bulletins" });
  }
}
