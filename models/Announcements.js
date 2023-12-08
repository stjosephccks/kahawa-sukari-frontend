import mongoose, {model,Schema, models} from "mongoose";
//const { Schema, model, models } = require("mongoose");

const AnnouncementSchema = new Schema({  
    title: {type:String,required:true},
    description: {type:String,required:true},
    sunday:{type:mongoose.Schema.Types.ObjectId,ref:'Sunday'}

});
const Announcement = models?.Announcement||model('Announcement', AnnouncementSchema);
export default Announcement;