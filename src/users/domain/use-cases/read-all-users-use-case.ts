import { ReadAllUsersRepository } from '../contracts/repository';
import { ReadAllUsersFeature } from '../features/read-all-users-feature';

export class ReadAllUsersUseCase implements ReadAllUsersFeature {
  constructor(private readonly userRepository: ReadAllUsersRepository) {}

  async execute(
    params: ReadAllUsersFeature.Params,
  ): Promise<ReadAllUsersFeature.Result> {
    const users = await this.userRepository.execute(params);
    return users;
  }
}
