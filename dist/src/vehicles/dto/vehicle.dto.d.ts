export declare class CreateVehicleDto {
    plateNumber: string;
    capacity: number;
    fuelConsumptionPer100km: number;
}
export declare class UpdateVehicleDto {
    plateNumber?: string;
    capacity?: number;
    fuelConsumptionPer100km?: number;
    status?: string;
}
