import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto, UpdateVehicleDto } from './dto/vehicle.dto';
export declare class VehiclesController {
    private readonly vehiclesService;
    constructor(vehiclesService: VehiclesService);
    create(req: any, createVehicleDto: CreateVehicleDto): Promise<any>;
    findAll(req: any): Promise<any>;
    findOne(req: any, id: string): Promise<any>;
    update(req: any, id: string, updateVehicleDto: UpdateVehicleDto): Promise<any>;
    remove(req: any, id: string): Promise<any>;
}
