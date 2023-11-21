const Bundle = require("../model/Bundle");
const Group = require("../model/Group");

class GroupController {


    async createGroup(req,res,next){
        const {bundle} = req.body;

        try {
            const group = await  Group.create(req.body)
            await Bundle.findByIdAndUpdate(bundle,{
                $push:{groups:group._id}
            })
           res.status(200).json({message:"successfully added",success:true})
            
        } catch (error) {
            next(error)
        }
    }
    async getGroupById(){
        const {id} = req.params.id;

        try {
            const group = await Group.findById(id).populate(["bundle","file"])
            
            res.status(200).json({message:group,success:true})
            
        } catch (error) {
            next(error)
        }
    }
    async getGroupsOfBundle(req,res,next){
        const {id} = req.params;

        try {
            const group = await Group.find({bundle:id}).populate(["bundle","files"])
            res.status(200).json({message:group,success:true})
            
        } catch (error) {
            next(error)
        }
    }


}
module.exports = new GroupController()
