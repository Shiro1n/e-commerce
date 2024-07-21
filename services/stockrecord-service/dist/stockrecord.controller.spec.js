"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const stockrecord_controller_1 = require("./stockrecord.controller");
describe('StockrecordController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [stockrecord_controller_1.StockrecordController],
        }).compile();
        controller = module.get(stockrecord_controller_1.StockrecordController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=stockrecord.controller.spec.js.map