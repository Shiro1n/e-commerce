"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockrecordModule = void 0;
const common_1 = require("@nestjs/common");
const database_1 = require("@ecommerce/database");
const stockrecord_service_1 = require("./stockrecord.service");
const stockrecord_controller_1 = require("./stockrecord.controller");
let StockrecordModule = class StockrecordModule {
};
StockrecordModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_1.DatabaseModule,
        ],
        providers: [stockrecord_service_1.StockrecordService],
        controllers: [stockrecord_controller_1.StockrecordController],
    })
], StockrecordModule);
exports.StockrecordModule = StockrecordModule;
//# sourceMappingURL=stockrecord.module.js.map