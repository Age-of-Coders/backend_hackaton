import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { PostTypeOrmRepository } from './repositories/post.typeorm.repository';
import { Post } from './entities/post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [PostsController],
  providers: [
    PostsService,
    PostTypeOrmRepository,
    {
      provide: 'IPostRepository',
      useClass: PostTypeOrmRepository,
    }
  ],
})
export class PostsModule {}
