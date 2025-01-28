-- CreateTable
CREATE TABLE "Cursor" (
    "id" TEXT NOT NULL,
    "eventSeq" TEXT NOT NULL,
    "txDigest" TEXT NOT NULL,

    CONSTRAINT "Cursor_pkey" PRIMARY KEY ("id")
);
