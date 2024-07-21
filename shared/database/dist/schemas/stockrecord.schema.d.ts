import { Document, Types } from 'mongoose';
export declare class Stockrecord extends Document {
    product: Types.ObjectId;
    price: number;
    num_in_stock: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare const StockrecordSchema: import("mongoose").Schema<Stockrecord, import("mongoose").Model<Stockrecord, any, any>, undefined, {}>;
