import mongooseConnect from "@/lib/mongoose";
import { CalendarEvent } from "@/models/CalendarEvent";

export default async function handler(req, res) {
    await mongooseConnect()
    const { method } = req;
    try {


        if (method === 'GET') {
            const { month, year, group, activityType } = req.query;
            let query = {};
            if (month && year) {
                const startDate = new Date(year, month - 1, 1);
                const endDate = new Date(year, month, 0, 23, 59, 59);
                query.date = { $gte: startDate, $lte: endDate };
            }
            if (group && group !== 'All') {
                query.group = group;
            }
            if (activityType && activityType !== 'All') {
                query.activityType = activityType;
            }
            const events = await CalendarEvent.find(query).sort({ date: 1 });
            return res.status(200).json(events);
        }
    } catch (error) {
        console.log('Cant retrieve Events ', error)

    }
}