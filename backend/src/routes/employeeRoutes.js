import express from 'express';
import {createExpense} from '../controllers/employeeController.js'
import {authenticate} from "../middlewares/authMiddleware.js"
import { isEmployee } from "../middlewares/employeeMiddleware.js"
import { viewAllExpense } from '../controllers/employeeController.js';

const router = express.Router();

router.post('/create-expense',authenticate,isEmployee,createExpense);
router.get('/view-expenses',authenticate,isEmployee,viewAllExpense);

export default router;