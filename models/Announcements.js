import mongoose, {model,Schema, models} from "mongoose";
//const { Schema, model, models } = require("mongoose");

const AnnouncementSchema = new Schema({  
    title: {type:String,required:true},
    description: {type:String,required:true},
    sunday:{type:Schema.Types.ObjectId,ref:'Sunday'},
    published:{
        type:Boolean,
        default:false,
        required:true
    }


});
const Announcement = models?.Announcement||model('Announcement', AnnouncementSchema);
export default Announcement;