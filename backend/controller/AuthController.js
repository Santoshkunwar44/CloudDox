const User = require("../model/User");
const EmailService = require("../service/EmailService");
const { hashPassword, comparePassword } = require("../service/authService");

class AuthController{
    async register(req,res,next){
        const {password,email} = req.body;

        try {
            req.body.password =await  hashPassword(password);
            const newUser = await User.create(req.body);
            await EmailService.sentConfirmationEmail(email);
            res.status(200).json({message:newUser,status:200})
            
        } catch (error) {
            next(error)
        }
    }
    
    async login(req,res,next){
        const {password:userPassword,email} = req.body;

        try {

           const user = await User.findOne({email})
           if(!user){
            throw Error("This email is not registered ")
           }
          if(!await comparePassword(user.password,userPassword)){
            throw Error("Invalid credentials")
          }
          if(!user.isVerified){
            return res.status(403).json({message:"This email  is not verified",isVerified:false,success:false})
          }
          const {password,...other} = user._doc;
           return  res.status(200).json({message:other,isVerified:true,status:200})
            
        } catch (error) {
            next(error)
        }
    }
      async handleConfirmation(req,res){
    const {token} = req.params;

    try {
    const {email,exp,invalidLink} =  await  EmailService.verifyEmailConfirmationToken(token);
    console.log("the res",email,exp,invalidLink);

    
    if(email){
      const user = await User.findOneAndUpdate(
        {
        email  
        },{
        isVerified:true
      },{
        new:true,
        returnOriginal:false
      })
      const {password,...other} = user._doc;
      return res.status(200).json({message:other,success:true ,exp:false})
    }else{
      return res.status(200).json({message:"Link  expired try again",success:false ,exp:true})

    }
    } catch (error) {
        console.log("the eerr",error.message)
      return res.status(500).json({message:error.message,success:false ,exp:true})
    }
  }


    async sendEmailToVerifyAccount(req,res){
    const {email} = req.body;
    try {

      const user = await User.findOne({email});

      
      if(!user) throw Error("This email is not registered .")
      if(user._doc?.verified)  throw Error("This email is already verified")

      await EmailService.sentConfirmationEmail(email);


     
      
    
      res.status(200).json({message:"verify email sent",success:true})


    } catch (error) {

      res.status(500).json({message:error.message,success:false})

    }
  }

   async sentLinkToResetPassword(req,res){

    const {email} = req.body;
    
    try {
      
      const user =   await UserModel.findOne({email});
      if(!user){
       throw  Error("This email is not registered in Resourcify")
      }



      await EmailService.sentResetPassword(email)
      
      return res.status(200).json({message:"reset link sent",success:true})

    } catch (error) {
      
      let errorMessage = "Something went wrong";
      if(error.type==="custom"){
        errorMessage = error.message; 
      }

      return res.status(500).json({message:errorMessage,success:true})
    }
  }
}
module.exports = new AuthController();