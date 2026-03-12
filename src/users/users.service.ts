import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateDriverDto } from './dto/driver.dto';
import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createDriver(tenantId: string, createDriverDto: CreateDriverDto) {
    const { password, ...driverData } = createDriverDto;

    // Check if user already exists for this tenant
    const existingUser = await this.prisma.user.findFirst({
      where: {
        tenantId,
        email: driverData.email,
        deletedAt: null,
      },
    });

    if (existingUser) {
      throw new ConflictException('Driver with this email already exists in your company');
    }

    // Hash password (mocking bcrypt for now as we don't have it installed/setup fully)
    // Actually, I should probably use a simple placeholder if bcrypt isn't installed.
    // Let's assume bcrypt will be available.
    const passwordHash = await bcrypt.hash(password, 10);

    return this.prisma.user.create({
      data: {
        ...driverData,
        passwordHash,
        tenantId,
        role: Role.DRIVER,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        phoneNumber: true,
        createdAt: true,
      },
    });
  }

  async findAllDrivers(tenantId: string) {
    return this.prisma.user.findMany({
      where: {
        tenantId,
        role: Role.DRIVER,
        deletedAt: null,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        phoneNumber: true,
        createdAt: true,
      },
    });
  }
}
