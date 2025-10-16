import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";
import { STRONG_PASSWORD } from "src/common/utils/consts/password.filter";

export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword(STRONG_PASSWORD.StrongPasswordOptions, {
    message: STRONG_PASSWORD.StrongPasswordMessage,
  })
  password: string;

  @IsString({ each: true })
  @IsNotEmpty()
  role: string;
}
