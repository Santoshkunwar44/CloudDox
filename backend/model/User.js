const mongoose = require("mongoose")

const UserSchema =mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFfdPAfeJKYiwglp2z9IjDwphJAqEgyAsUv9nfcDLPVXRPzL2B0pLAvUoyVf4QTzoyso&usqp=CAU"
    },
    isVerified:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

module.exports =  mongoose.model("User",UserSchema)

