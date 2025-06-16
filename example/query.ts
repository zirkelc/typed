import { type InferTyped, type Typed, typed } from '../src/index.js';

// @file: query-repository.ts
type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

export const getUserQuery = typed<
  Pick<User, 'id'>,
  Pick<User, 'name' | 'email'>,
  string
>('SELECT name, email FROM users WHERE id = $1');

export const getUserWithAgeQuery = typed<
  Pick<User, 'id'>,
  Pick<User, 'name' | 'email' | 'age'>,
  string
>('SELECT name, email, age FROM users WHERE id = $1');

export const listUsersQuery = typed<
  undefined,
  Array<Pick<User, 'id' | 'name' | 'email'>>,
  string
>('SELECT id, name, email FROM users');

// @file: database-service.ts
type InferQueryParams<TQuery extends string> = InferTyped<TQuery, 0>;
type InferQueryReturn<TQuery extends string> = InferTyped<TQuery, 1>;

class DatabaseService {
  private readonly client: any;

  constructor(client: any) {
    this.client = client;
  }

  async query<TQuery extends string>(
    query: TQuery,
    params?: InferQueryParams<TQuery>,
  ): Promise<InferQueryReturn<TQuery>> {
    const result = await this.client.query(query, params);
    return result as InferQueryReturn<TQuery>;
  }
}

// @file: main.ts
declare const client: any;
const databaseService = new DatabaseService(client);

const user = await databaseService.query(getUserQuery, { id: 1 });
//      ^? { name: string; email: string }

const userWithAge = await databaseService.query(getUserWithAgeQuery, { id: 1 });
//      ^? { name: string; email: string; age: number }

const allUsers = await databaseService.query(listUsersQuery);
//      ^? Array<{ id: number; name: string; email: string }>
