const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");
const { loginCheck, isAuth, isAdmin } = require("../middleware/auth");

router.post("/isadmin", authController.isAdmin);
router.post("/signup", authController.postSignup);
router.post("/signin", authController.postSignin);
router.post("/user", loginCheck, isAuth, isAdmin, authController.allUser);

router.post('/googlelogin',authController.googlelogin)

router.get("/:id/verify/:token",authController.getVerifyLink)

//reset password
router.post("/password-reset",authController.resetPassword)
router.get("/password-reset/:id/:token",authController.getVerifyPasswordResetLink)
router.post("/password-reset/:id/:token",authController.newPassword)


module.exports = router;
