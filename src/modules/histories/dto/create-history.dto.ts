import { IsNumber } from "class-validator";

export class CreateHistoryDto {

  @IsNumber()
  likes: number;

}
