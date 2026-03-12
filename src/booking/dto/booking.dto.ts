import { IsString, IsNotEmpty, IsDateString, IsUUID, IsInt, Min } from 'class-validator';

export class SearchTripsDto {
  @IsUUID()
  @IsNotEmpty()
  tenantId: string;

  @IsString()
  @IsNotEmpty()
  startLocation: string;

  @IsString()
  @IsNotEmpty()
  endLocation: string;

  @IsDateString()
  @IsNotEmpty()
  date: string;
}

export class CreateReservationDto {
  @IsUUID()
  @IsNotEmpty()
  tenantId: string;

  @IsUUID()
  @IsNotEmpty()
  tripId: string;

  @IsUUID()
  @IsNotEmpty()
  passengerId: string;

  @IsInt()
  @Min(1)
  seatNumber: number;
}
