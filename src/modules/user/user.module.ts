import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/database/PrismaService';
@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}

//Os providers são as mesmas classes marcadas com @Injectable anteriormente
//Ou seja, sempre que o UserController precisar de dependências, este módulo as busca nos providers
