import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { AiController } from './ai.controller';
import { VehiclesModule } from '../vehicles/vehicles.module';
import { RoutesModule } from '../routes/routes.module';
import { TripsModule } from '../trips/trips.module';

@Module({
  imports: [VehiclesModule, RoutesModule, TripsModule],
  providers: [AiService],
  controllers: [AiController],
})
export class AiModule {}
