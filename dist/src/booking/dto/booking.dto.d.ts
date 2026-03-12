export declare class SearchTripsDto {
    tenantId: string;
    startLocation: string;
    endLocation: string;
    date: string;
}
export declare class CreateReservationDto {
    tenantId: string;
    tripId: string;
    passengerId: string;
    seatNumber: number;
}
