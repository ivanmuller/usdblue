/*
  Warnings:

  - The primary key for the `Scrapped` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Scrapped" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sourceId" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "sourceName" TEXT NOT NULL,
    "buy_price" INTEGER NOT NULL,
    "sell_price" INTEGER NOT NULL
);
INSERT INTO "new_Scrapped" ("buy_price", "date", "sell_price", "sourceId", "sourceName") SELECT "buy_price", "date", "sell_price", "sourceId", "sourceName" FROM "Scrapped";
DROP TABLE "Scrapped";
ALTER TABLE "new_Scrapped" RENAME TO "Scrapped";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
