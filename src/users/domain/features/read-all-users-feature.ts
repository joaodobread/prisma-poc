export interface ReadAllUsersFeature {
  execute: (
    params: ReadAllUsersFeature.Params,
  ) => Promise<ReadAllUsersFeature.Result>;
}

export namespace ReadAllUsersFeature {
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
