import { UsersService } from './users.service';
import { CreateDriverDto } from './dto/driver.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createDriver(req: any, createDriverDto: CreateDriverDto): Promise<any>;
    findAllDrivers(req: any): Promise<any>;
}
