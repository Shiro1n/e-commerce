import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { StockrecordService } from './stockrecord.service';

@Controller('stockrecords')
export class StockrecordController {
  constructor(private readonly stockrecordService: StockrecordService) {}

  @Post()
  create(@Body() createStockrecordDto: any) {
    return this.stockrecordService.create(createStockrecordDto);
  }

  @Get()
  findAll() {
    return this.stockrecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockrecordService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateStockrecordDto: any) {
    return this.stockrecordService.update(id, updateStockrecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockrecordService.remove(id);
  }
}
