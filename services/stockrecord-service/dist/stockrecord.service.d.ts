import { Model } from 'mongoose';
import { Stockrecord } from '@ecommerce/database';
export declare class StockrecordService {
    private stockrecordModel;
    constructor(stockrecordModel: Model<Stockrecord>);
    create(createStockrecordDto: any): Promise<Stockrecord>;
    findAll(): Promise<Stockrecord[]>;
    findOne(id: string): Promise<Stockrecord>;
    update(id: string, updateStockrecordDto: any): Promise<Stockrecord>;
    remove(id: string): Promise<Stockrecord>;
}
