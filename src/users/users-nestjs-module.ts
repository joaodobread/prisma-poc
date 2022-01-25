import { Module } from '@nestjs/common';
import { ReadAllUsersPrismaRepository } from './infra/prisma/read-all-user-repository';
import { UsersController } from './users-controller';
import { ReadAllUsersUseCase } from './domain/use-cases';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: 'ReadAllUsersFeature',
      useFactory: () => {
        return new ReadAllUsersUseCase(new ReadAllUsersPrismaRepository());
      },
    },
  ],
})
export class UsersModule {}
