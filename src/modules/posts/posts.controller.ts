import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Auth } from '../auth/decorators/auth.decorator';
import { ValidRoles } from '../auth/interfaces/valid-roles.interface';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';

@UseGuards(JwtGuard)
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Auth(ValidRoles.medic, ValidRoles.admin)
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }

  @Post('like/:id')
  @HttpCode(HttpStatus.OK)
  addLike(
    @Param('id') id: string,
    @GetUser() user: JwtPayload
  ) {

    return this.postsService.addLike(id, user.id);

  }

  @Delete('like/:id')
  @HttpCode(HttpStatus.OK)
  removeLike(
    @Param('id') id: string,
    @GetUser() user: JwtPayload
  ) {
    return this.postsService.removeLike(id, user.id);
  }

  @Post('favorite/:id')
  @HttpCode(HttpStatus.OK)
  async addFavorite(
    @Param('id') id: string,
    @GetUser() user: JwtPayload
  ) {

    const result = await this.postsService.addFavorite(user.id, id);
    if (!result) {
      throw new Error('No se pudo agregar a favoritos. Verifica que el post exista.');
    }
    return result;

  }

  @Delete('favorite/:id')
  removeFavorite(
    @Param('id') id: string,
    @GetUser() user: JwtPayload
  ) {
    return this.postsService.removeFavorite(user.id, id);
  }

  @Get('favorites/me')
  listFavorites(
    @GetUser() user: JwtPayload
  ) {
    return this.postsService.listFavorites(user.id);
  }
}
