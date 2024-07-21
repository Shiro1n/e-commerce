import { Test, TestingModule } from '@nestjs/testing';
import { StockrecordService } from './stockrecord.service';

describe('StockrecordService', () => {
  let service: StockrecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockrecordService],
    }).compile();

    service = module.get<StockrecordService>(StockrecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
