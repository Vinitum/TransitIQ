import { PrismaService } from '../common/prisma/prisma.service';
import { CreateDriverDto } from './dto/driver.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createDriver(tenantId: string, createDriverDto: CreateDriverDto): Promise<any>;
    findAllDrivers(tenantId: string): Promise<any>;
}
