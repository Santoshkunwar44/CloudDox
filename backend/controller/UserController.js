const User = require("../model/User");

class UserController{
    async getUserById(req,res,next){
        const {id} =req.params;
        try {
            const user = await User.findById(id);
            res.status(200).json({message:user,success:true})

        } catch (error) {
            next(error)
        }
    }
    async updateUser(req,res,next){
        try {
                const {id} = req.params;
                const updatedUser =  await User.findUserByIdAndUpdate(id,{
                    $set:req.body
                },{
                    new:true,
                })
                res.status(200).json({message:updatedUser,success:true})
        } catch (error) {
            next(error)
        }
    }
}
module.exports = new UserController()
