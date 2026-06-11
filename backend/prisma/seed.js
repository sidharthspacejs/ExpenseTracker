import prisma from "../src/config/prisma.js"
import bcrypt from "bcryptjs"

async function main() {
    const hashedPassword = await bcrypt.hash("123456",10);
    await prisma.user.create({
        data: {
            email: "admin@gmail.com",
            password: hashedPassword,
            name: "Admin",
            username: "Admin123",

            age: 30,
            designation : "Administrator",

            spendingLimit: 0,

            role: "ADMIN"
        }
    })

    console.log("Admin created");
}

main()
   .catch((e) => console.error(e))
   .finally(async() => await prisma.$disconnect());