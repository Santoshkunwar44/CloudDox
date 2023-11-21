const File = require("../model/File");
const Group = require("../model/Group");

class FileController {


    async createFile(req,res,next){
        const {group} = req.body;
        try {
            const file = await  File.create(req.body)
            await Group.findByIdAndUpdate(group,{
                $push:{files:file._id}
            })
           res.status(200).json({message:"successfully added",success:true})
            
        } catch (error) {
            next(error)
        }
    }
   async getFileById(req,res,next){
        const {id} = req.params;

        try {
            const   file = await File.findById(id).populate(["group","bundle","resources"])
            res.status(200).json({message:file,success:true})
            
        } catch (error) {
            next(error)
        }
    }
    async getFilesOfGroup(req,res,next){
        const {group} = req.params;

        try {
            const file = await File.find({group}).populate(["bundle","group","resources"])
            res.status(200).json({message:file,success:true})
            
        } catch (error) {
            next(error)
        }
    }


}
module.exports = new FileController()
