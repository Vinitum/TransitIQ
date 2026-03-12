import { RoutesService } from './routes.service';
import { CreateRouteDto, UpdateRouteDto } from './dto/route.dto';
export declare class RoutesController {
    private readonly routesService;
    constructor(routesService: RoutesService);
    create(req: any, createRouteDto: CreateRouteDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        tenantId: string;
        title: string;
        startLocation: string;
        endLocation: string;
        basePrice: import("@prisma/client-runtime-utils").Decimal;
        taxRate: import("@prisma/client-runtime-utils").Decimal;
        totalDistanceKm: number;
    }>;
    findAll(req: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        tenantId: string;
        title: string;
        startLocation: string;
        endLocation: string;
        basePrice: import("@prisma/client-runtime-utils").Decimal;
        taxRate: import("@prisma/client-runtime-utils").Decimal;
        totalDistanceKm: number;
    }[]>;
    findOne(req: any, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        tenantId: string;
        title: string;
        startLocation: string;
        endLocation: string;
        basePrice: import("@prisma/client-runtime-utils").Decimal;
        taxRate: import("@prisma/client-runtime-utils").Decimal;
        totalDistanceKm: number;
    }>;
    update(req: any, id: string, updateRouteDto: UpdateRouteDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        tenantId: string;
        title: string;
        startLocation: string;
        endLocation: string;
        basePrice: import("@prisma/client-runtime-utils").Decimal;
        taxRate: import("@prisma/client-runtime-utils").Decimal;
        totalDistanceKm: number;
    }>;
    remove(req: any, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        tenantId: string;
        title: string;
        startLocation: string;
        endLocation: string;
        basePrice: import("@prisma/client-runtime-utils").Decimal;
        taxRate: import("@prisma/client-runtime-utils").Decimal;
        totalDistanceKm: number;
    }>;
}
