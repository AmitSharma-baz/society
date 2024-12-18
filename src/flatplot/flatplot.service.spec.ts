import { Test, TestingModule } from '@nestjs/testing';
import { FlatplotService } from './flatplot.service';

describe('FlatplotService', () => {
  let service: FlatplotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlatplotService],
    }).compile();

    service = module.get<FlatplotService>(FlatplotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
