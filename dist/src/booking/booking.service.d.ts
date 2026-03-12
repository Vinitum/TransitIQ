import { PrismaService } from '../common/prisma/prisma.service';
import { SearchTripsDto, CreateReservationDto } from './dto/booking.dto';
export declare class BookingService {
    private prisma;
    constructor(prisma: PrismaService);
    searchTrips(searchDto: SearchTripsDto): Promise<any>;
    createReservation(createDto: CreateReservationDto): Promise<any>;
    payReservation(tenantId: string, reservationId: string): Promise<any>;
    private generatePnrCode;
}
