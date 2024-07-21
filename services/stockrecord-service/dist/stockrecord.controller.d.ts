import { StockrecordService } from './stockrecord.service';
export declare class StockrecordController {
    private readonly stockrecordService;
    constructor(stockrecordService: StockrecordService);
    create(createStockrecordDto: any): Promise<import("@ecommerce/database").Stockrecord>;
    findAll(): Promise<import("@ecommerce/database").Stockrecord[]>;
    findOne(id: string): Promise<import("@ecommerce/database").Stockrecord>;
    update(id: string, updateStockrecordDto: any): Promise<import("@ecommerce/database").Stockrecord>;
    remove(id: string): Promise<import("@ecommerce/database").Stockrecord>;
}
