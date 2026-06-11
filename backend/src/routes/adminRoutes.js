import express from "express"
import {createEmp} from "../controllers/adminController.js"

const router = express.Router();

router.post("/create-employee",createEmp);

export default router;