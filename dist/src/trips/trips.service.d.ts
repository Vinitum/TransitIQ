import { PrismaService } from '../common/prisma/prisma.service';
export declare class TripsService {
    private prisma;
    constructor(prisma: PrismaService);
    findOne(tenantId: string, id: string): Promise<any>;
}
