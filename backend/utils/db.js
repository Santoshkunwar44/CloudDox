
const { default: mongoose } = require("mongoose")

module.exports=async function(){

    try {
          const connection = await  mongoose.connect(process.env.MONGO_URI)
          console.log(connection.connection.host);
    } catch (error) {
        
        console.log(error)

    }

    

}