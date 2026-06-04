import prisma from "../prisma/client.js";

export const getAllEmployees = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch employees" });
    }   
};

export const getEmployeeById = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await prisma.employee.findUnique({
            where: { id: parseInt(id) },
        });
        if (!employee) {
            return res.status(404).json({ error: "Employee not found" });
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch employee" });
    }
}; 
export const createEmployee = async (req, res) => {
    try {
        const { name, email, department, expense } = req.body;
        const Employee = await prisma.employee.create({
            data: { name, email, department, expense}
        });
        res.status(201).json(Employee);
    } catch (error) {
        res.status(500).json({ error: "Failed to create employee" });
    }
};
export const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, department, expense } = req.body;
        const updatedEmployee = await prisma.employee.update({
            where: { id: parseInt(id) },
            data: { name, email, department, expense }
        });
        res.status(200).json(updatedEmployee);
    } catch (error) {
        res.status(500).json({ error: "Failed to update employee" });
    }
};
export const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.employee.delete({
            where: { id: parseInt(id) }
        });
        res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete employee" });
    }
};  

