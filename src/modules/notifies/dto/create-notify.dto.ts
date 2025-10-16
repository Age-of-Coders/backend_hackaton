import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateNotifyDto {
  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  certificateImageUrl: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
