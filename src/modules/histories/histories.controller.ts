import { Controller, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { HistoriesService } from './histories.service';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';

@UseGuards(JwtGuard)
@Controller('histories')
export class HistoriesController {
  constructor(private readonly historiesService: HistoriesService) {}


  // @Patch('add-like/:id')
  // addLike(@Param('id') id: string) {
  //   return this.historiesService.addLike(id);
  // }

  // @Patch('substract-like/:id')
  // SusbtractLike(@Param('id') id: string) {
  //   return this.historiesService.substractLike(id);
  // }
}
