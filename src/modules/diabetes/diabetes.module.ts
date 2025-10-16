import { Module } from '@nestjs/common';
import { DiabetesService } from './diabetes.service';
import { DiabetesController } from './diabetes.controller';
import { Diabetes } from './entities/diabetes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Diabetes])],
  controllers: [DiabetesController],
  providers: [DiabetesService],
  exports: [TypeOrmModule]
})
export class DiabetesModule {}
