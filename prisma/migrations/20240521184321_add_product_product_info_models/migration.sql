-- CreateTable
CREATE TABLE "ProductInfo" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "namespaceId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "capacityAvailable" TEXT[],
    "capacity" TEXT NOT NULL,
    "priceRegular" INTEGER NOT NULL,
    "priceDiscount" INTEGER NOT NULL,
    "colorsAvailable" TEXT[],
    "color" TEXT NOT NULL,
    "images" TEXT[],
    "description" JSONB[],
    "screen" TEXT NOT NULL,
    "resolution" TEXT NOT NULL,
    "processor" TEXT NOT NULL,
    "ram" TEXT NOT NULL,
    "camera" TEXT NOT NULL,
    "zoom" TEXT NOT NULL,
    "cell" TEXT[],

    CONSTRAINT "ProductInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fullPrice" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "screen" TEXT NOT NULL,
    "capacity" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "ram" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_itemId_key" ON "Product"("itemId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "ProductInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
