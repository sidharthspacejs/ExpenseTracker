import express from "express"
import {createEmp} from "../controllers/adminController.js"
import { authenticate } from "../middlewares/authMiddleware.js";
import { isAdmin } from '../middlewares/adminMiddleware.js'

const router = express.Router();

router.post("/create-employee",authenticate,isAdmin,createEmp);



export default router;