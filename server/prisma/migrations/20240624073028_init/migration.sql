-- CreateTable
CREATE TABLE "chimichangas" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "price" INTEGER,

    CONSTRAINT "chimichangas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "chimichangas_name_key" ON "chimichangas"("name");
