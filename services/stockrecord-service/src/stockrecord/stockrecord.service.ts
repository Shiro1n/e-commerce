import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stockrecord } from '@ecommerce/database';

@Injectable()
export class StockrecordService {
  constructor(@InjectModel(Stockrecord.name) private stockrecordModel: Model<Stockrecord>) {}

  async create(createStockrecordDto: any): Promise<Stockrecord> {
    const createdStockrecord = new this.stockrecordModel(createStockrecordDto);
    return createdStockrecord.save();
  }

  async findAll(): Promise<Stockrecord[]> {
    return this.stockrecordModel.find().exec();
  }

  async findOne(id: string): Promise<Stockrecord> {
    return this.stockrecordModel.findById(id).exec();
  }

  async update(id: string, updateStockrecordDto: any): Promise<Stockrecord> {
    return this.stockrecordModel.findByIdAndUpdate(id, updateStockrecordDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Stockrecord> {
    return this.stockrecordModel.findByIdAndRemove(id).exec();
  }
}
