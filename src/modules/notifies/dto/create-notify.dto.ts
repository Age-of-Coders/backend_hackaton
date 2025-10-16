import { IsNotEmpty, IsString } from "class-validator";

export class CreateNotifyDto {
  @IsString()
  @IsNotEmpty()
  certificateImageUrl: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
