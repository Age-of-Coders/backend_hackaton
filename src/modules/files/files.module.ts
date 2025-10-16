import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { CloudinaryModule } from 'src/providers/cloudinary/cloudinary.module';
import { NotifiesModule } from '../notifies/notifies.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    CloudinaryModule, 
    NotifiesModule
  ],
  controllers: [FilesController],
})
export class FilesModule {}
