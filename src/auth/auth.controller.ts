import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Headers,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { toNodeHandler } from 'better-auth/node';
import { auth } from 'src/lib/auth';
import { CreateUserDto } from 'src/features/user/dto/create-user.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in/email')
  async create(@Body() createAuthDto: CreateAuthDto, @Headers() headers: any) {
    // return toNodeHandler(auth);
    return this.authService.create(createAuthDto, headers);
  }
  @Post('sign-up/email')
  async register(@Body() createUserDto: CreateUserDto) {
    // return toNodeHandler(auth);
    return this.authService.registerUser(createUserDto);
  }
  @Post('sign-out ')
  async signOut(@Headers() headers: any) {
    // return toNodeHandler(auth);
    return this.authService.signOut(headers);
  }

  @Get()
  findAll() {
    return toNodeHandler(auth);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return toNodeHandler(auth);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return toNodeHandler(auth);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return toNodeHandler(auth);
  }
}
