import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationService {
  /**
   * Mocks calculating the distance between two locations in kilometers.
   * To be replaced with Google Maps/Mapbox API integration later.
   * @param startLocation Starting point.
   * @param endLocation Destination point.
   * @returns Distance in KM.
   */
  calculateDistanceKm(startLocation: string, endLocation: string): number {
    // Mock: returns a random distance between 10 and 500 km for now
    console.log(`Calculating distance between ${startLocation} and ${endLocation}...`);
    return Math.floor(Math.random() * 490) + 10;
  }
}
