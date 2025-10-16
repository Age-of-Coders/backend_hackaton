import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto, LoginUserDto, AuthResponseDto } from './dtos/';
import { Bcrypt } from 'src/common/utils/adapters/helpers/bcrypt.helper';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly bcrypt: Bcrypt,
  ){}

  async register(registerDto: RegisterDto): Promise<AuthResponseDto> {

    const { password, ...userData } = registerDto;

    const user = await this.usersService.create({
      ...userData,
      password,
    });

    if (!user) throw new BadRequestException('Error al registar al usuario');

    const payload = { sub: user.id, username: user.username, email: user.email, roles: user.roles };

    const token = this.jwtService.sign(payload);

    return {
      accessToken: token,
      id: user.id,
      name: user.username,
      email: user.email,
      roles: user.roles,
    }
  }


  async login(loginUserDto: LoginUserDto): Promise<AuthResponseDto> {
    const user = await this.usersService.findByEmail(loginUserDto.email);

    const isValidPassword = await this.bcrypt.compare(loginUserDto.password, user.password);

    if (!user || !isValidPassword) throw new BadRequestException('Credenciales incorrectas');

    const payload = { sub: user.id, username: user.username, email: user.email, roles: user.roles };

    return { 
      accessToken: this.jwtService.sign(payload),
      id: user.id,
      name: user.username,
      email: user.email,
      roles: user.roles,
    }
  }

  async getJwt(payload: JwtPayload): Promise<string> {
    return this.jwtService.sign(payload);
  }
}