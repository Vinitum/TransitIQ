import { PrismaService } from '../common/prisma/prisma.service';
export declare class TripsService {
    private prisma;
    constructor(prisma: PrismaService);
    findOne(tenantId: string, id: string): Promise<{
        vehicle: {
            plateNumber: string;
            capacity: number;
            fuelConsumptionPer100km: number;
            status: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            tenantId: string;
        };
        route: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            tenantId: string;
            title: string;
            startLocation: string;
            endLocation: string;
            basePrice: import("@prisma/client-runtime-utils").Decimal;
            taxRate: import("@prisma/client-runtime-utils").Decimal;
            totalDistanceKm: number;
        };
    } & {
        status: import("@prisma/client").$Enums.TripStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        tenantId: string;
        routeId: string;
        vehicleId: string;
        driverId: string;
        startTime: Date;
        endTime: Date | null;
    }>;
}
