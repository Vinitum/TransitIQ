import { Module } from '@nestjs/common';
import { DriverOpsService } from './driver-ops.service';
import { DriverOpsController } from './driver-ops.controller';

@Module({
  providers: [DriverOpsService],
  controllers: [DriverOpsController]
})
export class DriverOpsModule {}
