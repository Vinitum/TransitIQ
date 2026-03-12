import { BookingService } from './booking.service';
import { SearchTripsDto, CreateReservationDto } from './dto/booking.dto';
export declare class BookingController {
    private readonly bookingService;
    constructor(bookingService: BookingService);
    search(searchDto: SearchTripsDto): Promise<any>;
    createReservation(createDto: CreateReservationDto): Promise<any>;
    pay(id: string, tenantId: string): Promise<any>;
}
