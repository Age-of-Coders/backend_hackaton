import { Controller } from '@nestjs/common';
import { DiabetesService } from './diabetes.service';

@Controller('diabetes')
export class DiabetesController {
  constructor(private readonly diabetesService: DiabetesService) {}
}
