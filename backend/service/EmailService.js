const jwt = require("jsonwebtoken");
const authService = require("./authService");
const nodemailer = require("nodemailer")



class EmailService{


   async sendEmail({subject,text,html,email}){

        let transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:465,
            secure:true,
            auth:{
                pass:process.env.SMTP_PW,
                user:process.env.APP_EMAIL,
            }
        })

        try {

            let info = await transporter.sendMail({
                from:process.env.APP_EMAIL,
                to:email,
                subject,
                text,
                html,
            })
            
            return info.messageId;

        } catch (error) {
                console.log(error)
                return error.message ;
        }   

    }
    getResetPasswordHtml(email){

        const confirmationHash= authService.getEmailConfirmationHash(email);
        return `<div>
        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/352850187_808709043911745_566344590095350869_n.jpg?stp=dst-jpg_p403x403&_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Rqrey-x9sZ8AX9n27lg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTRKzT-KFPaeoRLfSDMnnD-2bSQylVJ8XczY2N3QVFdkQ&oe=64A91F73" width="200px" style="border-radius:4px"/> <br/>
         <h1 style="color:#0e0b3d" > Reset your password  </h1> </br>
          </br> <h4 style="color:#0e0b3d">Click the button below to reset  your password. </h4> <br/> <a style="background:#686de0;height:40px; text-decoration:none;  padding:8px ; cursor:pointer;letter-spacing:1px; border-radius:4px;text-align:center;color:white;" href="${process.env.FRONTEND_URL}/auth/resetpassword?resetToken=${confirmationHash}"> RESET PASSWORD </a> </br> <br> <br>  </div>`

    }

    getAccConfirmationHtml(email){

        const hash = authService.getEmailConfirmationHash(email)
        

        
        return `<div>
          <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/352850187_808709043911745_566344590095350869_n.jpg?stp=dst-jpg_p403x403&_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Rqrey-x9sZ8AX9n27lg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTRKzT-KFPaeoRLfSDMnnD-2bSQylVJ8XczY2N3QVFdkQ&oe=64A91F73" width="200px" style="border-radius:4px"/> <br/>
           <h1 style="color:#0e0b3d" > Hello Resourcify welcomes you  </h1> </br>
           <h3 style="color:#0e0b3d"> You are closer to be the part of Resourcify .  </h3> </br> <h4 style="color:#0e0b3d">
           Click the verify button to verify your email .   </h4> <br/> 
           <a href="${process.env.FRONTEND_URL}/info/verifyEmail?token=${hash}&info=verify_email">
           <button>Verify Now</button>
           </a> 
            <br>
             <br> 
              </div>`

    }

    async sentConfirmationEmail(email){
        const emailPayload = {
            text:"Confirm your email",
            subject:"Email confirmation ",
            html:this.getAccConfirmationHtml(email),
            email
        }
        try {
            const messageId = await this.sendEmail(emailPayload);
            return messageId;
        } catch (error) {
            console.log(error)
            return error.message;
        }
    }

  
  
    async sentResetPassword(email){
        const emailPayload = {
            text:"Reset password",
            subject:"Reset password",
            html:this.getResetPasswordHtml(email),
            email
        }
        try {
            const messageId = await this.sendEmail(emailPayload);
            return messageId;
        } catch (error) {
            console.log(error)
            return error.message;
        }
    }

    async verifyEmailConfirmationToken(token) {

        try {

            const decoded = jwt.verify(token, process.env.EMAIL_CONFIRMATOIN_HASH)
            return { email: decoded?.email, exp: false, invalidLink: false }

        } catch (error) {
            console.log(error.message)
            if (error?.message === "jwt expired") {
                throw Error("Confirmation Link is  expired . Try again later ")
            } else {
                throw Error("Invalid Confirmation Link  ")
            
            }

        }
    }

    }
    module.exports = new  EmailService()


