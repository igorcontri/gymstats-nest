import { Injectable } from '@nestjs/common';
import { userDTO } from './user.dto';

@Injectable()
export class UserService {
  async create(data: userDTO) {}
}
