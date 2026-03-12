import { TripStatus } from '@prisma/client';
export declare class UpdateTripStatusDto {
    status: TripStatus;
}
export declare class LocationDto {
    latitude: number;
    longitude: number;
}
export declare class CreateExpenseDto {
    amount: number;
    description: string;
    category: string;
}
