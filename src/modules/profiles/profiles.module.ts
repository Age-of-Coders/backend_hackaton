import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { PassportModule } from '@nestjs/passport';
import { ProfileTypeOrmRepository } from './repositories/profile.typeorm.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Profile]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [ProfilesController],
  providers: [
    ProfilesService,
    {
      provide: 'IProfileRepository',
      useClass: ProfileTypeOrmRepository,
    }
  ],
  exports: [ProfilesService, TypeOrmModule]
})
export class ProfilesModule {}
