import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { MemberRepository } from './repositories/member-repository';
import { PrismaMemberRepository } from './repositories/prisma/prisma-member-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService, 
    PrismaService, 
    { provide: MemberRepository, useClass: PrismaMemberRepository }
  ],
})
export class AppModule { }
