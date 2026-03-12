import { PrismaService } from '../common/prisma/prisma.service';
import { CreateRouteDto, UpdateRouteDto } from './dto/route.dto';
import { PricingService } from '../shared/pricing/pricing.service';
import { LocationService } from '../shared/location/location.service';
export declare class RoutesService {
    private prisma;
    private pricingService;
    private locationService;
    constructor(prisma: PrismaService, pricingService: PricingService, locationService: LocationService);
    create(tenantId: string, createRouteDto: CreateRouteDto): Promise<{
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
    findAll(tenantId: string): Promise<{
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
    findOne(tenantId: string, id: string): Promise<{
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
    update(tenantId: string, id: string, updateRouteDto: UpdateRouteDto): Promise<{
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
    remove(tenantId: string, id: string): Promise<{
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
