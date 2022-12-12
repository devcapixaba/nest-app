import { PrismaService } from "src/database/prisma.service";
import { MemberRepository } from "../member-repository";
import {randomUUID} from 'node:crypto'
import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";

@Injectable()
export class PrismaMemberRepository implements MemberRepository{
    constructor(private prisma: PrismaService){}

    async create(name: string, memberFunction: string): Promise<void> {
        await this.prisma.member.create({
            data: {
                id: randomUUID(),
                name,
                function: memberFunction
            }
        })
    }
}