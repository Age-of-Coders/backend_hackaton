import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsInt()
  @IsNotEmpty()
  age: number;

  @IsString()
  @IsOptional()
  experience: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  diabetesTypesId: string;
}
