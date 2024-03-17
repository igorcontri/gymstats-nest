import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user') //'user' = rota "/user"
export class UserController {
  // private myuserService: UserService = new UserService();

  constructor(private readonly userService: UserService) {}
}
