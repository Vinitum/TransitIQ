import { IsString, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber } from 'class-validator';

export class CreateDriverDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsPhoneNumber()
  @IsOptional()
  phoneNumber?: string;
}
