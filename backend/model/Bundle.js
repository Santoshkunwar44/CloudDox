const mongoose = require("mongoose")

const BundleSchema = mongoose.Schema({
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
    groups:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Group"
        }
    ]
},{timestamps:true});

module.exports = mongoose.model("Bundle",BundleSchema)


