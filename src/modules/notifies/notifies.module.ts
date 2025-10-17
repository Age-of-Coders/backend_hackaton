import { Module } from '@nestjs/common';
import { NotifiesService } from './notifies.service';
import { NotifiesController } from './notifies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notify } from './entities/notify.entity';
import { PassportModule } from '@nestjs/passport';
import { NotifyTypeOrmRepository } from './repositories/notify.typeorm.repository';
import { UsersModule } from '../users/users.module';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Notify, User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    UsersModule,
],
  controllers: [NotifiesController],
  providers: [
    NotifiesService,
    NotifyTypeOrmRepository,
    {
      provide: 'INotifyRepository',
      useClass: NotifyTypeOrmRepository,
    },
  ],
  exports: [NotifiesService],
})
export class NotifiesModule {}
