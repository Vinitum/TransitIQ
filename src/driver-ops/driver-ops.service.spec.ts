import { Test, TestingModule } from '@nestjs/testing';
import { DriverOpsService } from './driver-ops.service';

describe('DriverOpsService', () => {
  let service: DriverOpsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverOpsService],
    }).compile();

    service = module.get<DriverOpsService>(DriverOpsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
