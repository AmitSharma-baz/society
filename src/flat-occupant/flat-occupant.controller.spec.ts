import { Test, TestingModule } from '@nestjs/testing';
import { FlatOccupantController } from './flat-occupant.controller';

describe('FlatOccupantController', () => {
  let controller: FlatOccupantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlatOccupantController],
    }).compile();

    controller = module.get<FlatOccupantController>(FlatOccupantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
