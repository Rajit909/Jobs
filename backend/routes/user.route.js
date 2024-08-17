import express from "express";
import {login, logout, register, updateProfile} from '../controllers/user.controller.js'
import upload from "../middlewares/multer.middleware.js";
import isAuthenticated from "../middlewares/isAuthenticated.js"

const router = express.Router();

router.route("/register").post(upload.single('profilePhoto'), register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/profile/update").post(isAuthenticated,upload.single('file'),updateProfile);


export default router