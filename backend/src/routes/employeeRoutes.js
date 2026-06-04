import express from "express";
import createEmployee from "../controllers/employeeController.js"

const router = express.Router();
router.post('/create', protect, adminOnly, createEmployee);
router.get('/all', protect, adminOnly, getAllEmployees);
router.get('/:id', protect, adminOnly, getEmployeeById);
router.put('/:id', protect, adminOnly, updateEmployee);
router.delete('/:id', protect, adminOnly, deleteEmployee);
export default router;
