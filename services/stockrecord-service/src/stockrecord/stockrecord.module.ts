import { Module } from '@nestjs/common';
import { DatabaseModule } from '@ecommerce/database';
import { StockrecordService } from './stockrecord.service';
import { StockrecordController } from './stockrecord.controller';

@Module({
  imports: [
    DatabaseModule,
  ],
  providers: [StockrecordService],
  controllers: [StockrecordController],
})
export class StockrecordModule {}
