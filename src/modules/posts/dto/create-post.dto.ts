import { IsNotEmpty, IsString } from "class-validator";

export class CreatePostDto {

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
