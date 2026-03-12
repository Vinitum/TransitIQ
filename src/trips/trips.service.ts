import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';

@Injectable()
export class TripsService {
  constructor(private prisma: PrismaService) {}

  async findOne(tenantId: string, id: string) {
    const trip = await this.prisma.trip.findFirst({
      where: {
        id,
        tenantId,
        deletedAt: null,
      },
      include: {
        route: true,
        vehicle: true,
      },
    });

    if (!trip) {
      throw new NotFoundException(`Trip with ID ${id} not found`);
    }

    return trip;
  }
}
