import { Module, Global } from '@nestjs/common';
import { PricingService } from './pricing/pricing.service';
import { LocationService } from './location/location.service';

@Global()
@Module({
  providers: [PricingService, LocationService],
  exports: [PricingService, LocationService],
})
export class SharedModule {}
