import { Injectable } from '@nestjs/common';
import { Diabetes } from './entities/diabetes.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DiabetesService {

  constructor(
    @InjectRepository(Diabetes)
    private readonly diabetesRepository:Repository<Diabetes>, 
  ) {}

  async getDiabeteType(id: string): Promise<Diabetes | null> {
    return this.diabetesRepository.findOneBy({ id });
  }
}
