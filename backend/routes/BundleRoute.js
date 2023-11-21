const { createBundle, getBundle, getBundleById } = require("../controller/bundleController")
const router = require("express").Router()
router.post('/create',createBundle)
router.get("/",getBundle)
router.get("/:id",getBundleById)

module.exports = router;


