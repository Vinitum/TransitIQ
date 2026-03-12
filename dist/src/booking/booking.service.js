"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma/prisma.service");
const client_1 = require("@prisma/client");
let BookingService = class BookingService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async searchTrips(searchDto) {
        const { tenantId, startLocation, endLocation, date } = searchDto;
        const searchDate = new Date(date);
        searchDate.setHours(0, 0, 0, 0);
        const nextDay = new Date(searchDate);
        nextDay.setDate(nextDay.getDate() + 1);
        const trips = await this.prisma.trip.findMany({
            where: {
                tenantId,
                status: client_1.TripStatus.PENDING,
                startTime: {
                    gte: searchDate,
                    lt: nextDay,
                },
                route: {
                    startLocation: { contains: startLocation, mode: 'insensitive' },
                    endLocation: { contains: endLocation, mode: 'insensitive' },
                },
                deletedAt: null,
            },
            include: {
                route: true,
                vehicle: true,
                reservations: {
                    where: {
                        status: { in: [client_1.ReservationStatus.PENDING, client_1.ReservationStatus.CONFIRMED] },
                    },
                },
            },
        });
        return trips.map(trip => {
            const takenSeats = trip.reservations.length;
            const availableSeats = trip.vehicle.capacity - takenSeats;
            return {
                ...trip,
                availableSeats,
            };
        }).filter(trip => trip.availableSeats > 0);
    }
    async createReservation(createDto) {
        const { tenantId, tripId, passengerId, seatNumber } = createDto;
        const trip = await this.prisma.trip.findFirst({
            where: { id: tripId, tenantId, deletedAt: null },
            include: { vehicle: true },
        });
        if (!trip) {
            throw new common_1.NotFoundException('Trip not found');
        }
        const existingReservation = await this.prisma.reservation.findFirst({
            where: {
                tripId,
                seatNumber,
                status: { in: [client_1.ReservationStatus.PENDING, client_1.ReservationStatus.CONFIRMED] },
            },
        });
        if (existingReservation) {
            throw new common_1.ConflictException(`Seat number ${seatNumber} is already occupied`);
        }
        const pnrCode = this.generatePnrCode();
        return this.prisma.reservation.create({
            data: {
                tenantId,
                tripId,
                passengerId,
                seatNumber,
                pnrCode,
                status: client_1.ReservationStatus.PENDING,
                paymentStatus: client_1.PaymentStatus.PENDING,
                totalAmount: trip.route.basePrice,
            },
        });
    }
    async payReservation(tenantId, reservationId) {
        const reservation = await this.prisma.reservation.findFirst({
            where: { id: reservationId, tenantId, deletedAt: null },
        });
        if (!reservation) {
            throw new common_1.NotFoundException('Reservation not found');
        }
        if (reservation.paymentStatus === client_1.PaymentStatus.PAID) {
            throw new common_1.BadRequestException('Reservation is already paid');
        }
        return this.prisma.reservation.update({
            where: { id: reservationId },
            data: {
                paymentStatus: client_1.PaymentStatus.PAID,
                status: client_1.ReservationStatus.CONFIRMED,
            },
        });
    }
    generatePnrCode() {
        return Math.random().toString(36).substring(2, 8).toUpperCase();
    }
};
exports.BookingService = BookingService;
exports.BookingService = BookingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookingService);
//# sourceMappingURL=booking.service.js.map