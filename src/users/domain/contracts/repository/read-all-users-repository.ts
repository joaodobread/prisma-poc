export interface ReadAllUsersRepository {
  execute: (
    params: ReadAllUsersRepository.Params,
  ) => Promise<ReadAllUsersRepository.Result>;
}

export namespace ReadAllUsersRepository {
  type User = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    ip_address: string;
  };

  export type Params = {
    sort?: {
      field: 'email' | 'first_name' | 'last_name';
      direction: 'asc' | 'desc';
    };
  };
  export type Result = User[];
}
