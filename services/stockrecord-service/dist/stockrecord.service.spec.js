"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const stockrecord_service_1 = require("./stockrecord.service");
describe('StockrecordService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [stockrecord_service_1.StockrecordService],
        }).compile();
        service = module.get(stockrecord_service_1.StockrecordService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=stockrecord.service.spec.js.map