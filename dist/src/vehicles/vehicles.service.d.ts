import { PrismaService } from '../common/prisma/prisma.service';
import { CreateVehicleDto, UpdateVehicleDto } from './dto/vehicle.dto';
export declare class VehiclesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(tenantId: string, createVehicleDto: CreateVehicleDto): Promise<any>;
    findAll(tenantId: string): Promise<any>;
    findOne(tenantId: string, id: string): Promise<any>;
    update(tenantId: string, id: string, updateVehicleDto: UpdateVehicleDto): Promise<any>;
    remove(tenantId: string, id: string): Promise<any>;
}
