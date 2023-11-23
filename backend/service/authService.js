const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")




class AuthService{

    async hashPassword(password){

        const hashSalt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password,hashSalt)
        return hash
    }

    async comparePassword(hash,password){

       const result =  await bcrypt.compare(password,hash)
       return result;

    }
        getEmailConfirmationHash(email){

        const token =  jwt.sign({ email }, process.env.EMAIL_CONFIRMATOIN_HASH, { expiresIn: 60 * 5 })
        return token;

    }

}
module.exports = new AuthService()