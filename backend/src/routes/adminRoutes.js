import express from "express"
import {createEmp, dashboard, deleteEmployee, viewAllEmployees, viewAllExpenses, viewExpenseById} from "../controllers/adminController.js"
import { authenticate } from "../middlewares/authMiddleware.js";
import { isAdmin } from '../middlewares/adminMiddleware.js'

const router = express.Router();

router.post("/create-employee",authenticate,isAdmin,createEmp); //employee creation 
router.delete('/:id/delete',authenticate,isAdmin,deleteEmployee); //Delete employee by id
router.get('/view-employees',authenticate,isAdmin,viewAllEmployees) //View all employees
router.get('/expenses',authenticate,isAdmin,viewAllExpenses);  //View all expense 
router.get('/:id/expenses',authenticate,isAdmin,viewExpenseById); // View expenses by Id
router.get('/dashboard',authenticate,isAdmin,dashboard)


export default router;