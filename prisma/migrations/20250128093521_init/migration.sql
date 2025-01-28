-- CreateTable
CREATE TABLE "Calc" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "num1" INTEGER NOT NULL,
    "num2" INTEGER NOT NULL,
    "ans" INTEGER NOT NULL,

    CONSTRAINT "Calc_pkey" PRIMARY KEY ("id")
);
