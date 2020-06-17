const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    text: {
        type:String,
        required:true
    },
    imageUrl: {
        type:String,
        required:false
    },
    videoUrl: {
        type:String,
        required:false
    },
    createdAt: { type: Date, default: Date.now },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    organization: {
        type: Schema.Types.ObjectId,
        ref: "Organization",
        required:true
    },
})

module.exports = mongoose.model("Message", messageSchema);
