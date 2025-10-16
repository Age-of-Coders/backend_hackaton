import { IsOptional, IsString, IsStrongPassword } from "class-validator";
import { STRONG_PASSWORD } from "src/common/utils/consts/password.filter";

export class UpdateUserDto {

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  @IsStrongPassword(STRONG_PASSWORD.StrongPasswordOptions, {
    message: STRONG_PASSWORD.StrongPasswordMessage,
  })
  password?: string;

}
