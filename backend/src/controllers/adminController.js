import prisma from "../config/prisma.js";
import { generateInvitationToken } from "../utils/generateInvitationToken.js";
import { generateInvitationLink } from '../utils/generateInvitationLink.js';
import { sendInvitationEmail } from "../services/emailService.js";

export const createEmp = async(req, res) => {

    const {name, email, role, designation} = req.body;

    try {

        if(!name || !email || !role || !designation){
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if(user){
           return res.status(400).json({
            message: "Employee already exists"
           });
        }

        const invitationToken = generateInvitationToken();
        const invitationExpiry = new Date(Date.now() + 24*60*60*1000);
        const invitationLink = generateInvitationLink(invitationToken);

        const employee = await prisma.user.create({
            data: {
                name: name,
                email: email,
                role: role.toUpperCase(),
                designation: designation,
                invitationToken: invitationToken,
                invitationExpiry: invitationExpiry,
                isActive: false
            }
        });

        await sendInvitationEmail(email,invitationLink);

        return res.status(201).json({
            message: "Employee created succesfully",
            employee
        });
    }

    catch(error){
        console.log(error);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

export const deleteEmployee = async(req,res) => {

    const id = Number(req.params.id);
    
    try {

        if(deleteEmployee.role == "ADMIN") {
            return res.status(403).json({
                message: "Only employees can be deleted"
            })
        }
        
        const deleteEmployee = await prisma.user.delete({
            where: {
                id
            }
        });

        if(!deleteEmployee) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }


        return res.status(200).json({
            message: "Employee removed successfully",
            deleteEmployee
        });

    } catch (error) {
        
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

export const viewAllEmployees = async(req,res) => {

    try {
        
        const employees = await prisma.user.findMany({
            where: {
                role: "EMPLOYEE"
            },
            select: {
                id: true,
                name: true,
                username: true,
                role: true,
                designation: true,
                expenses: {
                    select: {
                        amount: true
                    }
                }
            }
        });
        const result = employees.map(employee => {

            const totalExpense = employee.expenses.reduce((sum,expense) => sum + expense.amount,0);

            return {
                id: employee.id,
                name: employee.name,
                username: employee.username,
                role: employee.role,
                designation: employee.designation,
                expenseCount: employee.expenses.length,
                totalExpense
            }
        });

        return res.status(200).json({
            employees: result
        });

    } catch (error) {
        
        console.log(error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

export const viewAllExpenses = async(req,res) => {

    try {
        const expenses = await prisma.expense.findMany({
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
        return res.status(200).json({
            expenses
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

export const viewExpenseById = async(req,res) => {

    const id = Number(req.params.id);

    try {
        
        const expenses = await prisma.expense.findMany({
            where: {
                userId: id
            }
        });

        if(expenses.length === 0) {
            return res.status(404).json({
                message: "No expenses found for this user"
            });
        }

        return res.status(200).json({
            expenses
        });

    } catch (error) {
        
        console.log(error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }

}

export const dashboard = async(req, res) => {

    const period = req.query.period || "today";

    try {

        const endDate = new Date();
        const startDate = new Date(endDate);
        const dateFilter = {
            createdAt: {
                gte: startDate,
                lte: endDate
            }
        };

        if(period === "today") {

            startDate.setHours(0,0,0,0);

        }

        else if(period === "last7") {
            
            startDate.setDate(startDate.getDate() - 7);
            

        }

        else if(period === "month") {

            startDate.setDate(1);
            startDate.setHours(0,0,0,0);

        }

        else if(period === "year") {

            startDate.setHours(0,0,0,0);
            startDate.setMonth(0);
            startDate.setDate(1);

        }

        else {

            return res.status(400).json({
                message: "Invalid Period"
            });
        }

        const [employeeCount, stats, categorySummary] = await Promise.all([

            prisma.user.count({

                where: {
                    role: "EMPLOYEE"
                }
            }),

            prisma.expense.aggregate({

                where: dateFilter,

                _sum: {
                    amount: true
                },

                _avg: {
                    amount: true
                },

                _count: {
                    id: true
                },

                _max: {
                    amount: true
                }
            }),

            prisma.expense.groupBy({

                where: dateFilter,

                by: ["category"],

                _sum: {

                    amount: true

                }
            })

        ]);

        const totalExpense = stats._sum.amount || 0;
        const averageExpense = stats._avg.amount || 0;
        const highestExpense = stats._max.amount || 0;
        const numberOfExpenses = stats._count.id || 0;

        return res.status(200).json({
            employeeCount,
            totalExpense,
            averageExpense,
            highestExpense,
            numberOfExpenses,
            categorySummary
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: "internal Server Error"
        });
    }
}