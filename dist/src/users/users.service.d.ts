import { PrismaService } from '../common/prisma/prisma.service';
import { CreateDriverDto } from './dto/driver.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createDriver(tenantId: string, createDriverDto: CreateDriverDto): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        email: string;
        phoneNumber: string | null;
        role: import("@prisma/client").$Enums.Role;
    }>;
    findAllDrivers(tenantId: string): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        email: string;
        phoneNumber: string | null;
        role: import("@prisma/client").$Enums.Role;
    }[]>;
}
