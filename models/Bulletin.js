const { Schema, models, model } = require("mongoose");

const BulletinScema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    images: { type: [String] },
    sections: {
        type: [String],
        enum: ["YCA", "YSC", "CJPD", "MATRIMONY", "CHATECHISIS"]
    },
});
const Bulletin = models?.Bulletin || model('Bulletin', BulletinScema);
export default Bulletin;