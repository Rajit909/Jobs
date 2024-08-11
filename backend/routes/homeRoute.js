import express, { Router } from "express"
const app = express();

const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Welcome to the jobsapp")
})


export default router