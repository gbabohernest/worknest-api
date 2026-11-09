import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity.js';

export type UserSummary = Pick<
  User,
  'id' | 'firstname' | 'lastname' | 'email' | 'isActive' | 'createdAt'
>;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.userRepository.find({
      select: {
        id: true,
        firstname: true,
        lastname: true,
        email: true,
        isActive: true,
        createdAt: true,
      },
    });
  }
}
