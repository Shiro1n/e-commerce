import { Test, TestingModule } from '@nestjs/testing';
import { StockrecordController } from './stockrecord.controller';

describe('StockrecordController', () => {
  let controller: StockrecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockrecordController],
    }).compile();

    controller = module.get<StockrecordController>(StockrecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
