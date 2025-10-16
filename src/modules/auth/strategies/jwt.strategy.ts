import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { Request } from "express";
import { UsersService } from "src/modules/users/users.service";
import { ConfigService } from "@nestjs/config";
import { User } from "src/modules/users/entities/user.entity";
import { JwtPayload } from "../interfaces/jwt-payload.interface";

const cookieExtractor = (req: Request) => {
  if (!req || !req.cookies) return null;
  return req.cookies["auth_token"] ?? null;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {

  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
  ){
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
      secretOrKey: configService.get('JWT_SECRET')!,
      ignoreExpiration: false,
    })
  }

  async validate(payload: JwtPayload)  {

    const { id, roles } = payload;

    const user = await this.usersService.findOne(id);

    if (!user) throw new UnauthorizedException('No autorizado');

    const { password, ...userData  } = user;

    return { ...userData, roles };
  }
}