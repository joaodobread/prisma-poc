import { Controller, Get, Inject } from '@nestjs/common';
import { ReadAllUsersUseCase } from './domain/use-cases';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('ReadAllUsersFeature')
    private readonly readAllUsersUseCase: ReadAllUsersUseCase,
  ) {}

  @Get()
  async algo() {
    return this.readAllUsersUseCase.execute({});
  }
}
