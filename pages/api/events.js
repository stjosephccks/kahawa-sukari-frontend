import mongooseConnect from "@/lib/mongoose"
import Event from "@/models/Event";


export default async function handler(req, res){
    const {method}= req
    try {
    await mongooseConnect()

    if(method==='GET')
        if(req.query?.slug){
            res.json(await Event.findOne({slug:req.query.slug}));
        }else if(req.query?.id){
            res.json(await Event.findOne({_id:req.query.id}));
        }else{
       const event = await Event.find({ published: true }).sort({_id:-1}).exec();
       res.json(event);
        }
    
        
    } catch (error) {
        console.log('Cant retrieve Events ',error)
        
    }

}