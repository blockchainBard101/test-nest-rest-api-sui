/*
  Warnings:

  - Added the required column `objectId` to the `Calc` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Calc" ADD COLUMN     "objectId" TEXT NOT NULL;
