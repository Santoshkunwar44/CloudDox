const File = require("../model/File");
const Resource = require("../model/Resource");
const { cloudinary } = require("../utils/setup");
class ResourceController {


    async createResource(req,res,next){
        const {file} = req.body;
        try {
            const resource = await  Resource.create(req.body)
            await File.findByIdAndUpdate(file,{
                $push:{resources:resource._id}
            })
           res.status(200).json({message:"successfully added",success:true});
         } catch (error) {
            next(error)
        }
    }
    async getResourceById(){
        const {id} = req.params.id;

        try {
            const resource = await Resource.findById(id).populate("file")
            res.status(200).json({message:resource,success:true})
            
        } catch (error) {
            next(error)
        }
    }
    async getResourcesOfFile(){
        const {file} = req.params;
        try {
            const resources = await Resource.find({file}).populate("file")
            res.status(200).json({message:resources,success:true})
            
        } catch (error) {
            next(error)
        }
    }

    async uploadImage (req,res,next){
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
             upload_preset: "sharefile",
        });

        console.log(uploadResponse.secure_url);
        res.json({ message: uploadResponse.secure_url });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }

    }
 async uploadVideo (req,res,next){

    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
             resource_type: "video",    
             upload_preset: "vidoes",
        });
        console.log(uploadResponse.secure_url);
        res.json({ message: uploadResponse.secure_url });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
    }
}
module.exports = new ResourceController()
