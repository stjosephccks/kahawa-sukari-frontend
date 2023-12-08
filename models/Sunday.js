const { Schema, model, models } = require("mongoose");

const SundaySchema = new Schema({
    sunday:{type:String, required:true},
    
});
const Sunday = models?.Sunday||model('Sunday', SundaySchema);
export default Sunday;