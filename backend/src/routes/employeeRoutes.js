import express from 'express';
import {createExpense, dashboard, deleteExpense} from '../controllers/employeeController.js'
import {authenticate} from "../middlewares/authMiddleware.js"
import { isEmployee } from "../middlewares/employeeMiddleware.js"
import { viewMyExpense } from '../controllers/employeeController.js';
import { updateExpense } from '../controllers/employeeController.js';

const router = express.Router();

router.post('/create-expense',authenticate,isEmployee,createExpense);
router.get('/view-expenses',authenticate,isEmployee,viewMyExpense);
router.put('/expense/:id',authenticate,isEmployee,updateExpense);
router.delete('/expense/:id',authenticate,isEmployee,deleteExpense);
router.get('/dashboard',authenticate,isEmployee,dashboard)

export default router;