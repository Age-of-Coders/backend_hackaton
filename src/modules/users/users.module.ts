import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Bcrypt } from 'src/common/utils/adapters/helpers/bcrypt.helper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserTypeOrmRepository } from './repositories/user.typeorm.repository';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [UsersController],
  providers: [
    UsersService, 
    Bcrypt,
    {
      provide: 'IUserRepository',
      useClass: UserTypeOrmRepository,
    },
  ],
  exports: [UsersService, TypeOrmModule]
})
export class UsersModule {}
