import { Injectable } from '@nestjs/common';
import { CreateMemberBody } from './dtos/create-member-body';
import { MemberRepository } from './repositories/member-repository';

@Injectable()
export class AppService {
  constructor(private memberRepository: MemberRepository) { }

  async getHello(body: CreateMemberBody) {
    const { name, function: memberFunction } = body
    return await this.memberRepository.create(name, memberFunction)
  }
}
