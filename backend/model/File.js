const mongoose = require("mongoose")


const FileSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
    },

    bundle:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Bundle"
    },
    group:{
          type:mongoose.Schema.Types.ObjectId,
        ref:"Group"
    },
    resources:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Resource"
    }]
},{timestamps:true});

module.exports = mongoose.model("File",FileSchema)
