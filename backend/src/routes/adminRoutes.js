import express from "express"
import {createEmp} from "../controllers/adminController.js"
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create-employee",authenticate,createEmp);


export default router;