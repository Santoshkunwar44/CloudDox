const mongoose = require("mongoose")

const GroupSchema = mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true,
    },
    bundle:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Bundle"
    },
    files:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"File"
        }
    ]
},{timestamps:true});

module.exports = mongoose.model("Group",GroupSchema)


