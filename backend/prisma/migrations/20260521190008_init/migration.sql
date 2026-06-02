/*
  Warnings:

  - You are about to drop the column `Designation` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Salary` on the `User` table. All the data in the column will be lost.
  - Added the required column `designation` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salary` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "Designation",
DROP COLUMN "Salary",
ADD COLUMN     "designation" TEXT NOT NULL,
ADD COLUMN     "salary" DOUBLE PRECISION NOT NULL;
