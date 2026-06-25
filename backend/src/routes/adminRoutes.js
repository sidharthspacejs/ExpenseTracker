import express from "express"
import {createEmp, deleteEmployee, viewAllExpenses, viewExpenseById} from "../controllers/adminController.js"
import { authenticate } from "../middlewares/authMiddleware.js";
import { isAdmin } from '../middlewares/adminMiddleware.js'

const router = express.Router();

router.post("/create-employee",authenticate,isAdmin,createEmp); //employee creation route
router.delete('/:id/delete',authenticate,isAdmin,deleteEmployee); //Delete employee by id
router.get('/expenses',authenticate,isAdmin,viewAllExpenses);  //View all expense route
router.get('/:id/expenses',authenticate,isAdmin,viewExpenseById); // View expenses by Id


export default router;