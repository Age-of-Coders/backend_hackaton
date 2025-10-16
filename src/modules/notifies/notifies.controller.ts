import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { NotifiesService } from './notifies.service';
import { CreateNotifyDto } from './dto/create-notify.dto';
import { Auth } from '../auth/decorators/auth.decorator';
import { ValidRoles } from '../auth/interfaces/valid-roles.interface';

@Controller('notifies')
export class NotifiesController {
  constructor(private readonly notifiesService: NotifiesService) {}

  @Get()
  @Auth(ValidRoles.admin)
  findAll() {
    return this.notifiesService.findAll();
  }

  @Get(':id')
  @Auth(ValidRoles.admin)
  findOne(@Param('id') id: string) {
    return this.notifiesService.findOne(id);
  }

  @Put(':id')
  @Auth(ValidRoles.admin)
  validate(@Param('id') id: string) {
    return this.notifiesService.validate(id);
  }

  @Delete(':id')
  @Auth(ValidRoles.admin)
  remove(@Param('id') id: string) {
    return this.notifiesService.remove(id);
  }
}
