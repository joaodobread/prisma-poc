import { PrismaClientHelper } from '../../../helpers/prisma-client-helper';
import { ReadAllUsersRepository as IReadAllUsersRepository } from '../../domain/contracts/repository';

type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
};

export class ReadAllUsersPrismaRepository
  extends PrismaClientHelper
  implements IReadAllUsersRepository
{
  async execute(
    params: IReadAllUsersRepository.Params,
  ): Promise<IReadAllUsersRepository.Result> {
    const users: User[] = await this.users.findMany();
    return users;
  }
}
