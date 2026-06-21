import express from 'express';
import {createExpense} from '../controllers/employeeController.js'
import {authenticate} from "../middlewares/authMiddleware.js"
import { isEmployee } from "../middlewares/employeeMiddleware.js"

const router = express.Router();

router.post('create-expense',authenticate,isEmployee,createExpense);

export default router;