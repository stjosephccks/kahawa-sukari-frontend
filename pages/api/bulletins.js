import mongooseConnect from "@/lib/mongoose";
import Bulletin from "@/models/Bulletin";

export default async function handler(req,res){
    const{method}= req
    try {
        await mongooseConnect()

     if (method==='GET')   
        if(req.query?.id){
            res.json(await Bulletin.findOne({_id:req.query.id}));
        }else{
        const bulletins = await Bulletin.find({}).sort({createdAt:-1}).exec()
        res.json(bulletins)
        }
        
    } catch (error) {
        console.error('Error detching Bulletins', error)        
    }
    

}