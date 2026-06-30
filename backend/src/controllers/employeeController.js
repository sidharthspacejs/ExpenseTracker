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

export const deleteExpense = async(req,res) => {

    try {
        
     const id = Number(req.params.id);

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

     await prisma.expense.delete({
         where : {
             id
         }
     });

     return res.status(200).json({
        message: "Expense deleted successfully"
     });
    } catch (error) {

        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

export const dashboard = async(req, res) => {

    const period = req.query.period || "month";

    try {
        
        const endDate = new Date();
        const startDate = new Date(endDate);

        if(period == "today") {

            startDate.setHours(0,0,0,0);

        }

        else if(period == "last7") {

            startDate.setDate(startDate.getDate() - 7);

        }

        else if(period == "month") {

            startDate.setDate(1);
            startDate.setHours(0,0,0,0);
        }

        else if(period == "year") {
            
            startDate.setMonth(0);
            startDate.setDate(1);
            startDate.setHours(0,0,0,0);
        }

        else {
            return res.status(400).json({
                message: "Invalid Period"
            });
        }



        const expenses = await prisma.expense.findMany({
            where: {

                userId: req.user.id,
                createdAt: {
                    gte: startDate,
                    lte: endDate
                }
            },
            select: {
                amount: true,
                category: true
            }
        });

        if(expenses.length === 0) {
            return res.status(200).json({
                period,
                expenseCount: 0,
                totalExpense: 0,
                averageExpense: 0,
                highestExpense: 0,
                lowestExpense: 0
            });
        }

        const expenseCount = expenses.length;

        const totalExpense = expenses.reduce((total,expense) => {
            return total + expense.amount
        });

        const averageExpense = expenseCount === 0 ? 0 : totalExpense / expenseCount;

        const highestExpense = expenses.reduce((highest, expense) => {
            return expense.amount > highest ? expense.amount : highest;
        },0);

        const lowestExpense = expenses.reduce((lowest, expense) => {
            return expense.amount < lowest ? expense.amount : lowest;
        },expense[0].amount);

        return res.status(200).json({
            period,
            expenseCount,
            totalExpense,
            averageExpense,
            highestExpense,
            lowestExpense
        });

    } catch (error) {
        
        console.log(error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
}