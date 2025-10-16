import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { envsValidationSchema } from './config/validation.schema';
import { SeedModule } from './modules/seed/seed.module';
import { DiabetesModule } from './modules/diabetes/diabetes.module';
import { ProfilesModule } from './modules/profiles/profiles.module';
import { PostsModule } from './modules/posts/posts.module';
import { NotifiesModule } from './modules/notifies/notifies.module';
import { CloudinaryModule } from './providers/cloudinary/cloudinary.module';
import { FilesModule } from './modules/files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: envsValidationSchema,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT!!,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    SeedModule,
    DiabetesModule,
    ProfilesModule,
    PostsModule,
    NotifiesModule,
    CloudinaryModule,
    FilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
