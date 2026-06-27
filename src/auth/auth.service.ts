import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { auth } from 'src/lib/auth';
import { CreateUserDto } from 'src/features/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  async create(createAuthDto: CreateAuthDto, headers: any) {
    const data = await auth.api.signInEmail({
      body: {
        email: createAuthDto.email,
        password: createAuthDto.password,
        rememberMe: false,
      },
      headers,
    });

    return {
      message: 'Usuario logueado con exito !',
      user: data,
    };
  }
  async signOut(headers) {
    const wasSignOut = await auth.api.signOut({ headers });

    if (!wasSignOut.success)
      throw new BadRequestException('No fue posible cerrar sesion');

    return {
      message: 'Sesión cerrada con exito !',
    };
  }
  async registerUser(createUserDto: CreateUserDto) {
    console.log('=== ENTRA AL REGISTRO DE USUARIO ===');
    const password = createUserDto.password.toString();
    console.log(password, 'CONTRASEÑA');

    const user = await auth.api.signUpEmail({
      body: {
        email: createUserDto.email,
        name: createUserDto.name,
        last_name: 'kesero',
        phone: '1234567891',
        password,
        rememberMe: false,
        role_id: '21de9e6b-9f75-4ce1-b2f5-8b146e19b353',
      },
    });
    if (!user) throw new BadRequestException('No fue posible crear el usuario');

    console.log('EXITOSO');

    // const handleLoginSubmit = async (form: RegisterForm) => {
    //   console.log('ENTRA', form)
    //   return
    //   await authClient.signUp.email(
    //     {
    //       email: form.email,
    //       name: form.name,
    //       password: form.password,
    //       callbackURL: '/',
    //     },
    //     {
    //       onError: (ctx) => {
    //         console.log(ctx)
    //         alert('Hubo un error en el registro')
    //       },
    //     },
    //   )
    // }

    return {
      message: 'Usuario creado con exito!',
      user,
    };
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
