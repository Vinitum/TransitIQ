import { DriverOpsService } from './driver-ops.service';
import { CreateExpenseDto, UpdateTripStatusDto, LocationDto } from './dto/driver-ops.dto';
export declare class DriverOpsController {
    private readonly driverOpsService;
    constructor(driverOpsService: DriverOpsService);
    getTodayTrips(req: any): Promise<any>;
    updateTripStatus(req: any, tripId: string, updateTripStatusDto: UpdateTripStatusDto): Promise<any>;
    logLocation(req: any, tripId: string, locationDto: LocationDto): Promise<{
        success: boolean;
        timestamp: Date;
    }>;
    createExpense(req: any, tripId: string, createExpenseDto: CreateExpenseDto): Promise<any>;
}
