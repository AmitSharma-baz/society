import { Test, TestingModule } from '@nestjs/testing';
import { FlatplotController } from './flatplot.controller';

describe('FlatplotController', () => {
  let controller: FlatplotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlatplotController],
    }).compile();

    controller = module.get<FlatplotController>(FlatplotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
