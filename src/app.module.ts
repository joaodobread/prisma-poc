import { Module } from '@nestjs/common';
import { UsersModule } from './users/users-nestjs-module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
