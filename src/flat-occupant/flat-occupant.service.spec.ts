import { Test, TestingModule } from '@nestjs/testing';
import { FlatOccupantService } from './flat-occupant.service';

describe('FlatOccupantService', () => {
  let service: FlatOccupantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlatOccupantService],
    }).compile();

    service = module.get<FlatOccupantService>(FlatOccupantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
