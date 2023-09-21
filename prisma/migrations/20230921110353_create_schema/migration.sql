-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "biography" TEXT,
    "shareableSection" TEXT,
    "isOpenToWork" BOOLEAN,
    "isFreelancer" BOOLEAN,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);
