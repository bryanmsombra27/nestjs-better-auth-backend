import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { auth } from 'src/lib/auth';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    console.log('=== ENTRA AL REGISTRO DE USUARIO ===');
    // const user = await auth.api.signUpEmail({
    //   body: {
    //     email: createUserDto.email,
    //     name: createUserDto.name,
    //     password: createUserDto.password,
    //     rememberMe: false,
    //     // last_name: createUserDto.last_name,
    //     // phone: createUserDto.phone,
    //     role_id: '21de9e6b-9f75-4ce1-b2f5-8b146e19b353',
    //   },
    // });
    // if (!user) throw new BadRequestException('No fue posible crear el usuario');

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
      // user,
    };
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
