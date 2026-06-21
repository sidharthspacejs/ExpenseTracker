import express from 'express';
import {createExpense} from '../controllers/employeeController.js'

const router = express.Router();

router.post('create-expense',createExpense);

export default router;