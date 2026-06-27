import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './features/user/user.module';
import { PrismaService } from './services/prisma/prisma.service';
import { RoleModule } from './features/role/role.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, UserModule, RoleModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
