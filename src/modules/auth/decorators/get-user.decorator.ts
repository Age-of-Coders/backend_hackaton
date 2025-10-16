import { createParamDecorator, ExecutionContext, NotFoundException,  } from "@nestjs/common";

export const GetUser = createParamDecorator((data, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();

  const user = request.user;

  if (data) return user?.[data];

  if (!user) throw new NotFoundException('Usuario no encontrado');

  return user;
})