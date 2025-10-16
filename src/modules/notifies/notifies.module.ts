import { Module } from '@nestjs/common';
import { NotifiesService } from './notifies.service';
import { NotifiesController } from './notifies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notify } from './entities/notify.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([Notify]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
],
  controllers: [NotifiesController],
  providers: [NotifiesService],
})
export class NotifiesModule {}
