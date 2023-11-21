const { createFile, getFileById, getFilesOfGroup } = require("../controller/FileController");

const router = require("express").Router()
router.post('/create',createFile)
router.get("/:id",getFileById)
router.get("/byGroup/:group",getFilesOfGroup)


module.exports = router;


