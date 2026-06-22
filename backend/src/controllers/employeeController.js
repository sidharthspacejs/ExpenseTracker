import prisma from '../config/prisma.js'


export const createExpense = async(req,res) => {

    const {amount, description, category} = req.body;

    if(amount === undefined || !description || !category) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

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
        })
    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export const viewAllExpense = async(req,res) => {

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
        })

        return res.status(200).json({
            expenses
        });
    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}