import { IsString, IsInt, IsNumber, IsNotEmpty, Min } from 'class-validator';

export class CreateVehicleDto {
  @IsString()
  @IsNotEmpty()
  plateNumber: string;

  @IsInt()
  @Min(1)
  capacity: number;

  @IsNumber()
  @Min(0)
  fuelConsumptionPer100km: number;
}

export class UpdateVehicleDto {
  @IsString()
  @IsNotEmpty()
  plateNumber?: string;

  @IsInt()
  @Min(1)
  capacity?: number;

  @IsNumber()
  @Min(0)
  fuelConsumptionPer100km?: number;

  @IsString()
  status?: string;
}
