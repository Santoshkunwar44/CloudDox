const { createGroup, getGroupById, getGroupsOfBundle } = require("../controller/GroupController");

const router = require("express").Router()
router.post('/create',createGroup)
router.get("/:id",getGroupById)
router.get("/byBundle/:id",getGroupsOfBundle)

module.exports = router;


