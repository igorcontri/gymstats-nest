import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable() //"Injectable" torna essa classe injetável como dependência
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: UserDTO) {
    const emailExists = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (emailExists) {
      throw new Error('Email already registered');
    }

    const user = await this.prisma.user.create({
      data,
    });

    return user;
  }
}
