import { Controller, All, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { toNodeHandler } from 'better-auth/node';
import { auth } from 'src/lib/auth';
import type { Request, Response } from 'express';
@Controller('api')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @All('auth/*')
  async handleAuth(@Req() req: Request, @Res() res: Response) {
    console.log('ENTRA AQUI PERROS');
    // Si tu 'auth' es una instancia de Hono o similar que necesita el handler de Node
    // Debes asegurarte de pasar el request y response correctamente

    const handler = await toNodeHandler(auth);
    return handler(req, res);
  }
}
