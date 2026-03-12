import { PrismaService } from '../common/prisma/prisma.service';
import { CreateExpenseDto, UpdateTripStatusDto, LocationDto } from './dto/driver-ops.dto';
export declare class DriverOpsService {
    private prisma;
    constructor(prisma: PrismaService);
    getTodayTrips(tenantId: string, driverId: string): Promise<any>;
    updateTripStatus(tenantId: string, driverId: string, tripId: string, updateTripStatusDto: UpdateTripStatusDto): Promise<any>;
    logLocation(tenantId: string, driverId: string, tripId: string, locationDto: LocationDto): Promise<{
        success: boolean;
        timestamp: Date;
    }>;
    createExpense(tenantId: string, driverId: string, tripId: string, createExpenseDto: CreateExpenseDto): Promise<any>;
}
