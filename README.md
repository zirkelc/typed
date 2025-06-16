# Typed

Typed is a library to create opaque types.

```ts
import { typed, InferTyped } from 'typed-ts';

type User = {
  id: number;
  name: string;
  email: string;
};

const getUserQuery = typed<
  Pick<User, 'id'>,             // Type of the query parameters
  Pick<User, 'name' | 'email'>, // Type of the query result
  string                        // Type of the query string
>('SELECT name, email FROM users WHERE id = $1');

type QueryParams = InferTyped<typeof getUserQuery, 0>;
//      ^? { id: number }
type QueryResult = InferTyped<typeof getUserQuery, 1>;
//      ^? { name: string; email: string }
type QueryString = typeof getUserQuery;
//      ^? string
``` 

## How it works

The `typed(value: any): any` function takes a single argument of type `any` and returns it without any changes. The function itself is a no-op at runtime, but the generic types passed to `typed<T1, T2, ..., T9>` are embedded in the returned type as [unique symbols](https://www.typescriptlang.org/docs/handbook/symbols.html#unique-symbol). 
Unique symbols only exist in TypeScript's type system and are removed during compilation. We can use them to temporarily store type information and infer the original types later on. 
The utility type `InferTyped<T, N>` can be used to infer the N-th generic type passed to `typed<T0, T1, T2, ..., T9>`.

## Installation

```bash
npm install typed-ts
```

## API

### `typed<T0, T1, T2, ..., T9, TBase>(value: TBase): TBase`

Takes a single argument of type `TBase` and returns it without any changes.
Embeds the generic types passed to the function in the returned type as [unique symbols](https://www.typescriptlang.org/docs/handbook/symbols.html#unique-symbol).

```ts
const plainString = 'hello world';
const typedString = typed<{ a: string }, { b: number }, { c: boolean }, typeof plainString>(plainString);

type TypedString = typeof typedString;
//      ^? string & Typed<{ a: string }, 0> & Typed<{ b: number }, 1> & Typed<{ c: boolean }, 2>
```

### `InferTyped<T, N>`

Infers the N-th generic type passed to `typed<T0, T1, T2, ..., T9>`.

```ts
const plainString = 'hello world';
const typedString = typed<{ a: string }, { b: number }, { c: boolean }, typeof plainString>(plainString);

type TypedString = typeof typedString;
//      ^? string & Typed<{ a: string }, 0> & Typed<{ b: number }, 1> & Typed<{ c: boolean }, 2>

type T0 = InferTyped<TypedString, 0>;
//   ^? { a: string }

type T1 = InferTyped<TypedString, 1>;
//   ^? { b: number }

type T2 = InferTyped<TypedString, 2>;
//   ^? { c: boolean }
```

## Example

This library is meant to be used as a type-level utility to extend existing types.
A common use case is to co-locate SQL queries with their parameter and result types.
Let's see how this works with a database service:

```ts
// @file: database-service.ts
class DatabaseService {
  private readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async query<TParams, TReturn>(query: string, params: TParams): Promise<TReturn> {
    const result = await this.client.query(query, params);
    return result as TReturn;
  }
}

// @file: main.ts

import { DatabaseService } from './database-service';

const databaseService = new DatabaseService(client);

const result = await databaseService.query<{ id: number }, { name: string; email: string }>(
  'SELECT name, email FROM users WHERE id = $1',
  { id: 1 },
);
```

This works well for one-off queries. However, when you need to reuse the same query in multiple places, you might add a dedicated method:

```ts
// @file: database-service.ts

class DatabaseService {
  // ...

  async getUser(id: number): Promise<{ name: string; email: string }> {
    const result = await this.query<{ id: number }, { name: string; email: string }>(
      'SELECT name, email FROM users WHERE id = $1',
      { id },
    );
    return result;
  }
}
```

But what if you need a variation of this query, like adding an age field? You'd need to create another method:

```ts
// @file: database-service.ts

class DatabaseService {
  // ...

  async getUser(id: number): Promise<{ name: string; email: string }> {
    const result = await this.query<{ id: number }, { name: string; email: string }>(
      'SELECT name, email FROM users WHERE id = $1',
      { id },
    );
    return result;
  }

  async getUserWithAge(id: number): Promise<{ name: string; email: string; age: number }> {
    const result = await this.query<{ id: number }, { name: string; email: string; age: number }>(
      'SELECT name, email, age FROM users WHERE id = $1',
      { id },
    );
    return result;
  }
}
```

Notice how each method is essentially a typed query - it connects a query string with its parameter and result types. We can make this relationship explicit using `typed`:

```ts
// @file: query-repository.ts
import { typed } from 'typed-ts';

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
```

Instead of creating new methods for each query, we can make the database service generic and pass typed queries directly:

```ts
// @file: database-service.ts
import { InferTyped } from 'typed-ts';

type InferQueryParams<TQuery extends string> = InferTyped<TQuery, 0>;
type InferQueryReturn<TQuery extends string> = InferTyped<TQuery, 1>;

class DatabaseService {
  // ...

  async query<TQuery extends string>(query: TQuery, params: InferQueryParams<TQuery>): Promise<InferQueryReturn<TQuery>> {
    const result = await this.client.query(query, params);
    return result as InferQueryReturn<TQuery>;
  }
}
```

Now you can use the queries with full type safety:

```ts
// @file: main.ts

import { getUserQuery, getUserWithAgeQuery, listUsersQuery } from './query-repository';
import { DatabaseService } from './database-service';

const databaseService = new DatabaseService(client);

const user = await databaseService.query(getUserQuery, { id: 1 });
//      ^? { name: string; email: string }

const userWithAge = await databaseService.query(getUserWithAgeQuery, { id: 1 });
//      ^? { name: string; email: string; age: number }

const allUsers = await databaseService.query(listUsersQuery);
//      ^? Array<{ id: number; name: string; email: string }>
```

You can find the complete example in [example/query.ts](./example/query.ts).