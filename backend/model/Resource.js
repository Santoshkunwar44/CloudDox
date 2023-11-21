const mongoose = require("mongoose")

const resourceSchema = mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    size:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:true,
        enums:["audio","video","book","template"]
    },
    file:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"File"
    },
    placement:{
        type:Number,
    },
    display:{
        type:Boolean,
        default:true
    }
},{timestamps:true})
module.exports = mongoose.model("Resource",resourceSchema);

