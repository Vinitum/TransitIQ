import { UsersService } from './users.service';
import { CreateDriverDto } from './dto/driver.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createDriver(req: any, createDriverDto: CreateDriverDto): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        email: string;
        phoneNumber: string | null;
        role: import("@prisma/client").$Enums.Role;
    }>;
    findAllDrivers(req: any): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        email: string;
        phoneNumber: string | null;
        role: import("@prisma/client").$Enums.Role;
    }[]>;
}
