import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { AtGuard, PermissionsGuard } from './auth/common/guards';
import { UserModule } from './user/user.module';
import { SessionModule } from './session/session.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'static'),
      serveRoot: '/static',
    }),
    AuthModule,
    PrismaModule,
    UserModule,
    SessionModule,
  ],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: AtGuard,
    },
    {
      provide: 'APP_GUARD',
      useClass: PermissionsGuard,
    },
  ],
})
export class AppModule {}
