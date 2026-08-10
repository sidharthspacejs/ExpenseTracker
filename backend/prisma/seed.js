import prisma from "../src/config/prisma.js";
import bcrypt from "bcryptjs";
import "dotenv/config";

async function main() {
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASS, 10);
  await prisma.user.upsert({
    where: {
      email: process.env.ADMIN_EMAIL,
    },
    update: {
      password: hashedPassword,
      name: "Admin",
      username: process.env.ADMIN_USERNAME,
      status: "ACTIVE",
      age: 30,
      designation: "Administrator",
      spendingLimit: 0,
      role: "ADMIN",
    },

    create: {
      email: process.env.ADMIN_EMAIL,
      password: hashedPassword,
      name: "Admin",
      username: process.env.ADMIN_USERNAME,
      status: "ACTIVE",
      age: 30,
      designation: "Administrator",
      spendingLimit: 0,
      role: "ADMIN",
    },
  });

  console.log("Admin created");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
