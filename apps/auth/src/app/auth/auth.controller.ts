import { Controller, UseGuards } from '@nestjs/common';

import {
  AuthRequest,
  AuthServiceController,
  AuthServiceControllerMethods,
} from 'types/proto/auth';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UsersService } from '../users/users.service';
import { TokenPayload } from './token-payload.interface';

@Controller('auth')
@AuthServiceControllerMethods()
export class AuthController implements AuthServiceController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  async authenticate(request: AuthRequest & { user: TokenPayload }) {
    return this.usersService.findOne({ id: request.user.userId });
  }
}
