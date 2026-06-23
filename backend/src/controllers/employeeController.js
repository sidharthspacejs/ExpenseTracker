import prisma from '../config/prisma.js'
import { expenseSchema } from '../../validations/expenseValidations.js';


export const createExpense = async(req,res) => {

    const result = expenseSchema.safeParse(req.body);  //Input Validation

    if(!result.success) {
        return res.status(400).json({
            errors: result.error.issues
        });
    }

    const {amount, description, category} = result.data; 


    try {
        
        const expense = await prisma.expense.create({
            data: {
                amount,
                description,
                category,
                userId: req.user.id
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        role: true
                    }
                }
            }
        });

        return res.status(201).json({
            message: "Expense created successfully",
            expense
        });
    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

export const viewMyExpense = async(req,res) => {

    try {
        const expenses = await prisma.expense.findMany({
            where: {
                userId: req.user.id
            },
            include: {
                user: {
                    select: {
                        name: true,
                        role: true
                    }
                }
            }
        });

        return res.status(200).json({
            expenses
        });
    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}


export const updateExpense = async(req,res) => {

    const id = Number(req.params.id);

    const result = expenseSchema.safeParse(req.body);

    if(!result.success) {
        return res.status(400).json({
            errors: result.error.issues
        });
    }

    const {amount, description, category} = result.data;

    try {
        
        const expense = await prisma.expense.findUnique({
            where: {
                id
            }
        });

        if(!expense) {
            return res.status(404).json({
                message: "Expense not found"
            });
        }

        if(expense.userId !== req.user.id) {
            return res.status(403).json({
                message: "Access Denied"
            });
        }

        const updated = await prisma.expense.update({
            where: {
                id
            },
            data: {
                amount,
                description,
                category
            }
        });

        return res.status(200).json({
            message: "Expense updated successfully",
            updated
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }


}