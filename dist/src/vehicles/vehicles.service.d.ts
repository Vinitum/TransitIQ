import { PrismaService } from '../common/prisma/prisma.service';
import { CreateVehicleDto, UpdateVehicleDto } from './dto/vehicle.dto';
export declare class VehiclesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(tenantId: string, createVehicleDto: CreateVehicleDto): Promise<{
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
    findAll(tenantId: string): Promise<{
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
    findOne(tenantId: string, id: string): Promise<{
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
    update(tenantId: string, id: string, updateVehicleDto: UpdateVehicleDto): Promise<{
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
    remove(tenantId: string, id: string): Promise<{
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
