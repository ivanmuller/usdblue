-- CreateTable
CREATE TABLE "Scrapped" (
    "id" SERIAL NOT NULL,
    "sourceId" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "sourceName" TEXT NOT NULL,
    "buy_price" DOUBLE PRECISION NOT NULL,
    "sell_price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Scrapped_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Averages" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "buy_price" DOUBLE PRECISION NOT NULL,
    "sell_price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Averages_pkey" PRIMARY KEY ("id")
);
