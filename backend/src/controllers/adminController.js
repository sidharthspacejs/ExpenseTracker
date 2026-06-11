import prisma from "../config/prisma.js";
import { generateInvitationToken } from "../utils/generateInvitationToken.js";
import { generateInvitationLink } from '../utils/generateInvitationLink.js';

export const createEmp = async(req, res) => {

    const {name, email, role, designation} = req.body;

    try {

        if(!name || !email || !role || !designation){
            return res.status(400).json({
                message: "All fields are required"
            })
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
        })

        

        return res.status(201).json({
            message: "Employee created succesfully",
            employee
        })
    }

    catch(error){
        console.log(error);

        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}