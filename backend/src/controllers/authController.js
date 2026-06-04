import prisma from "../config/prisma.js"
import bcrypt from "bcryptjs"

export const login = async (req,res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({
            where:{
                email
            }
        });

        if(!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(
            password, user.password
        );

        if(!isMatch){
            return res.status(401).json({
                message: "Invalid Password"
            });
        }

        return res.status(200).json({
            message: "Login successful",

            user: {
                id: user.id,
                email: user.email,
                role: user.role
            }
        })
    }

    catch(error) {
        console.log(error);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

