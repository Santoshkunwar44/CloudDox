const { register, login, handleConfirmation, sendEmailToVerifyAccount } = require("../controller/AuthController");

const router = require("express").Router()

router.post("/register",register)
router.post("/login",login)
router.post("/email_confirmation/:token",handleConfirmation);
router.post("/sent_verification_link",sendEmailToVerifyAccount)



module.exports = router;