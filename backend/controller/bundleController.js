const Bundle = require("../model/Bundle");
const File = require("../model/File")
class BundleController {


    async createBundle(req,res,next){
        try {
            await  Bundle.create(req.body)
           res.status(200).json({message:"successfully added",success:true})
            
        } catch (error) {
            next(error)
        }
    }
    async getBundle(req,res,next){
        try {
           let bundle = await Bundle.find({...req.query}).populate({
                path: "groups",
              
            }).exec();

            res.status(200).json({message:bundle,success:true})
            
        } catch (error) {
            next(error)
        }
    }

    async getBundleById(req,res,next){
        const {id} = req.params;
       try {
            const bundle = await Bundle.findById(id).populate("groups")
            res.status(200).json({message:bundle,success:true})
            
        } catch (error) {
            next(error)
        }

    }

}
module.exports = new BundleController()
