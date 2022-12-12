import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateMemberBody } from './dtos/create-member-body';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('hello')
  getHello(@Body() body: CreateMemberBody) {
    return this.appService.getHello(body);
  }
}
