import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppOwnerService } from './app-owner.service';
import { CreateAppOwnerDto } from './dtos/app-owner.dto';

@Controller('app-owner')
export class AppOwnerController {

    constructor(private readonly appOwnerService: AppOwnerService) {}

  @Post()
  async create(@Body() data: CreateAppOwnerDto) {
    return this.appOwnerService.create(data);
  }

  @Get()
  async findAll() {
    return this.appOwnerService.findAll();
  }
}
