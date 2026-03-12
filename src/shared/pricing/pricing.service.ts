import { Injectable } from '@nestjs/common';

@Injectable()
export class PricingService {
  /**
   * Calculates the final price including taxes.
   * @param basePrice The base price of the route.
   * @param taxRate The tax rate as a decimal (e.g., 0.18 for 18%).
   * @returns Final price including tax.
   */
  calculateFinalPrice(basePrice: number, taxRate: number): number {
    return basePrice * (1 + taxRate);
  }
}
