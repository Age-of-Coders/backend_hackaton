import { Controller, Body, Patch, Param, UseGuards, Post, Delete } from '@nestjs/common';
import { HistoriesService } from './histories.service';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';

@UseGuards(JwtGuard)
@Controller('histories')
export class HistoriesController {
  constructor(private readonly historiesService: HistoriesService) {}

  @Post(':id/like')
  addLike(
    @Param('id') id: string,
    @GetUser() user: JwtPayload
  ) {
    return this.historiesService.addLike(id, user.id);
  }

  @Delete(':id/like')
  removeLike(
    @Param('id') id: string,
    @GetUser() user: JwtPayload
  ) {
    return this.historiesService.removeLike(id, user.id);
  }
}
