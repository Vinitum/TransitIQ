import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { UsersModule } from './users/users.module';
import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';
import { TripsModule } from './trips/trips.module';
import { AiModule } from './ai/ai.module';

@Module({
  imports: [CommonModule, VehiclesModule, UsersModule, RoutesModule, SharedModule, TripsModule, AiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
