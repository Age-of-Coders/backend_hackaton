import { Controller, Get, Param } from '@nestjs/common';
import { DiabetesService } from './diabetes.service';

@Controller('diabetes')
export class DiabetesController {
  constructor(private readonly diabetesService: DiabetesService) {}

    @Get(':id')
    async getDiabeteType(@Param('id') id: string) {
      return this.diabetesService.getDiabeteType(id);
    }
}
