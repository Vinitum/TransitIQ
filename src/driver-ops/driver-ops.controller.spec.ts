import { Test, TestingModule } from '@nestjs/testing';
import { DriverOpsController } from './driver-ops.controller';

describe('DriverOpsController', () => {
  let controller: DriverOpsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverOpsController],
    }).compile();

    controller = module.get<DriverOpsController>(DriverOpsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
