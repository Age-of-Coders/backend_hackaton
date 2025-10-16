import { Controller, Post, Body, HttpCode, HttpStatus, Res, InternalServerErrorException, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto, LoginUserDto, AuthResponseDto } from './dtos/';
import { Response } from 'express';
import { GetUser } from './decorators/get-user.decorator';
import { User } from '../users/entities/user.entity';
import { JwtGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(
    @Body() registerDto: RegisterDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<AuthResponseDto> {

    const { accessToken, id, name, email, roles } = await this.authService.register(registerDto);

    const cookieOptions = {
      httpOnly: true,
      sameSite: 'lax' as const,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 // 1 día
    };

    res.cookie('auth_token', accessToken, cookieOptions);

    return {
      id,
      name,
      email,
      accessToken,
      roles
    };
  }


  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() loginUserDto: LoginUserDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<AuthResponseDto> {
    const { accessToken, id, name, email, roles } = await this.authService.login(loginUserDto);

    res.cookie('auth_token', accessToken, {
      httpOnly: true,
      sameSite: 'lax' as const,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 // 1 día
    });

    return {
      id,
      name,
      email,
      accessToken,
      roles
    };
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('auth_token');
    return { message: 'Sesión cerrada exitosamente' };
  }

  @UseGuards(JwtGuard)
  @Get('check-status')
  @HttpCode(HttpStatus.OK)
  async checkAuthStatus(
    @GetUser() user: User,
    @Res({ passthrough: true }) res: Response
  ) {

    const payload = { id: user.id, email: user.email, username: user.username, roles: user.roles };

    const accessToken = await this.authService.getJwt(payload);

    res.cookie('auth_token', accessToken, {
      httpOnly: true,
      sameSite: 'lax' as const,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 // 1 día
    });

    return {
      id: user.id,
      name: user.username,
      email: user.email,
      accessToken
    };
  }
}