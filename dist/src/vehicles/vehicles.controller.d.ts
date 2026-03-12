import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto, UpdateVehicleDto } from './dto/vehicle.dto';
export declare class VehiclesController {
    private readonly vehiclesService;
    constructor(vehiclesService: VehiclesService);
    create(req: any, createVehicleDto: CreateVehicleDto): Promise<{
        plateNumber: string;
        capacity: number;
        fuelConsumptionPer100km: number;
        status: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        tenantId: string;
    }>;
    findAll(req: any): Promise<{
        plateNumber: string;
        capacity: number;
        fuelConsumptionPer100km: number;
        status: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        tenantId: string;
    }[]>;
    findOne(req: any, id: string): Promise<{
        plateNumber: string;
        capacity: number;
        fuelConsumptionPer100km: number;
        status: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        tenantId: string;
    }>;
    update(req: any, id: string, updateVehicleDto: UpdateVehicleDto): Promise<{
        plateNumber: string;
        capacity: number;
        fuelConsumptionPer100km: number;
        status: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        tenantId: string;
    }>;
    remove(req: any, id: string): Promise<{
        plateNumber: string;
        capacity: number;
        fuelConsumptionPer100km: number;
        status: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        tenantId: string;
    }>;
}
