import { ReadAllUsersUseCase } from '..';
import { mock } from 'jest-mock-extended';
import { ReadAllUsersRepository } from '../../contracts/repository';

const genDataMock = () => [
  {
    id: 1,
    first_name: 'joao',
    last_name: 'fernandes',
    email: 'joao.fernandes@sof.to',
    gender: 'male',
    ip_address: '0.0.0.0',
  },
  {
    id: 2,
    first_name: 'antonio',
    last_name: 'mota',
    email: 'antonio.mota@sof.to',
    gender: 'male',
    ip_address: '0.0.0.0',
  },
];

describe('ReadAllUsersUseCase', () => {
  const userRepository = mock<ReadAllUsersRepository>();

  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
    userRepository.execute.mockResolvedValue(genDataMock());
  });

  test('should return a list of users when success', async () => {
    userRepository.execute.mockResolvedValueOnce([]);
    const sut = new ReadAllUsersUseCase(userRepository);

    await expect(sut.execute({})).resolves.toStrictEqual([]);
  });

  test('should return a list of users containing 2 users', async () => {
    const sut = new ReadAllUsersUseCase(userRepository);
    await expect(sut.execute({})).resolves.toStrictEqual(genDataMock());
  });

  test('should return a list of users sorted by email asc', async () => {
    const sut = new ReadAllUsersUseCase(userRepository);
    const repoSpy = jest.spyOn(userRepository, 'execute');
    userRepository.execute.mockResolvedValueOnce(genDataMock().reverse());

    await expect(
      sut.execute({ sort: { direction: 'asc', field: 'email' } }),
    ).resolves.toStrictEqual(genDataMock().reverse());
    expect(repoSpy).toHaveBeenCalledWith({
      sort: { direction: 'asc', field: 'email' },
    });
  });
});
