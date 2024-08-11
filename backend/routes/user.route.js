import express from "express";
import {login, logout, register, updateProfile} from '../controllers/user.controller.js'
import { singleUpload } from "../middlewares/multer.js";
import isAuthenticated from "../middlewares/isAuthenticated.js"

const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);


export default router