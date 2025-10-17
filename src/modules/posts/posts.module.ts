import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { PostTypeOrmRepository } from './repositories/post.typeorm.repository';
import { Post } from './entities/post.entity';
import { PostLike } from './entities/post-like.entity';
import { FavoritePost } from './entities/favorite-post.entity';
import { FavoritePostTypeOrmRepository } from './repositories/favorite-post.typeorm.repository';
import { User } from '../users/entities/user.entity';
import { UsersModule } from '../users/users.module';
import { MedicVerifiedGuard } from '../auth/guards/medic-verified.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post, PostLike, FavoritePost, User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    UsersModule,
  ],
  controllers: [PostsController],
  providers: [
    PostsService,
    PostTypeOrmRepository,
    FavoritePostTypeOrmRepository,
    MedicVerifiedGuard,
    {
      provide: 'IPostRepository',
      useClass: PostTypeOrmRepository,
    }
  ],
})
export class PostsModule {}
