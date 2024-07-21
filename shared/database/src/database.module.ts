import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';
import { Stockrecord, StockrecordSchema } from './schemas/stockrecord.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: Stockrecord.name, schema: StockrecordSchema },
    ]),
  ],
  exports: [
    MongooseModule,
  ],
})
export class DatabaseModule {}
