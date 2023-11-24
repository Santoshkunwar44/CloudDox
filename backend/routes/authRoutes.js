const { register, login, handleConfirmation, sendEmailToVerifyAccount, sentLinkToResetPassword } = require("../controller/AuthController");

const router = require("express").Router()

router.post("/register",register)
router.post("/login",login)
router.post("/email_confirmation/:token",handleConfirmation);
router.post("/sent_verification_link",sendEmailToVerifyAccount)
router.post("/sent_emai_reset_password",sentLinkToResetPassword)



module.exports = router;