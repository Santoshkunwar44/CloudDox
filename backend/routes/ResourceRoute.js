const {  createResource, getResourceById, getResourcesOfFile, uploadImage, uploadVideo } = require("../controller/ResourceController");



const router = require("express").Router()
router.post('/create',createResource)
router.get("/:id",getResourceById)
router.get("/byFile",getResourcesOfFile)
router.post("/upload/image",uploadImage)
router.post("/upload/video",uploadVideo)




module.exports = router;


