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

        if(deleteEmployee.role == "ADMIN") {
            return res.status(403).json({
                message: "Only employees can be deleted"
            })
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