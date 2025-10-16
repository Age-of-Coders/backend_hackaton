import { Controller, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UseInterceptors, Request } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { CloudinaryService } from 'src/providers/cloudinary/cloudinary.service';
import { Auth } from '../auth/decorators/auth.decorator';
import { ValidRoles } from '../auth/interfaces/valid-roles.interface';
import { ApiBearerAuth } from '@nestjs/swagger';
import { NotifiesService } from '../notifies/notifies.service';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';

@Auth(ValidRoles.medic, ValidRoles.admin)
@ApiBearerAuth()
@Controller('files')
export class FilesController {
  constructor(
    private readonly cloudinaryService: CloudinaryService,
    private readonly notifiesService: NotifiesService, 
  ) { }

  @Post('certificate')
  @UseInterceptors(FileInterceptor('file', {
    storage: memoryStorage(),
  }))
  async uploadAvatar(
    @GetUser() user: JwtPayload,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }), // 4 MB
          new FileTypeValidator({ fileType: '(.png|jpeg|jpg|webp)' })
        ]
      })
    ) file: Express.Multer.File) {

    const secureUrl = await this.cloudinaryService.uploadFile(file);

    await this.notifiesService.create({
      certificateImageUrl: typeof secureUrl === 'string' ? secureUrl : '',
      userId: user.id,
    });

    return { message: 'Archivo cargado y notificación enviada', url: secureUrl };
  }
}