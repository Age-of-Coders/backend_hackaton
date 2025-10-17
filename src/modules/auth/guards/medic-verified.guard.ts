import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from 'src/modules/users/entities/user.entity';

@Injectable()
export class MedicVerifiedGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const user = req.user as User | undefined;

    if (!user) {
      throw new ForbiddenException('No autenticado');
    }

    if (!user.isMedic) {
      throw new ForbiddenException('Permisos insuficientes: requiere cuenta verificada como médico');
    }

    return true;
  }
}
