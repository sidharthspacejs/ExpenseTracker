import prisma from '../config/prisma.js'


export const createExpense = async(req,res) => {

    const {amount, description, category} = req.body;

    try {
        
        const expense = await prisma.expense.create({
            data: {
                amount,
                description,
                category,
                userId: req.user.Id
            }
        });

        return res.status(201).json({
            message: "Expense created successfully",
            expense
        })
    } catch (error) {

        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}