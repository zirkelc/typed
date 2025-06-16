import { type InferTyped, type Typed, typed } from './typed.js';

type Query =
  // <
  // TParams extends Record<string, any> = Record<string, any>,
  // TReturn extends Record<string, any> | undefined = undefined,
  // >
  {
    statement: string;
    // mapParams?: (params: TParams) => Record<keyof TParams, any>;
  };

// export function query<
//   TParams extends Record<string, any> = Record<string, any>,
//   TReturn extends Record<string, any> | undefined = undefined,
//   TStatement extends string = string,
// >(
//   statement: TStatement,
//   mapParams?: (params: TParams) => Record<keyof TParams, any>,
// ): Query<TParams, TReturn> {
//   return { statement: statement, mapParams: mapParams } as Query<
//     TParams,
//     TReturn,
//     TStatement
//   >;
// }

// const query1 = typed<{ a: string }, Query>({
//   statement: 'SELECT * FROM users',
// });

function query<
  TParams extends Record<string, any> | undefined,
  TReturn extends Record<string, any>,
>(query: string) {
  return typed<TParams, TReturn, typeof query>(query);
}

const typedQuery = typed<undefined, { b: string }, string>(
  'SELECT * FROM users',
);

type TypedQuery = typeof typedQuery;

type queryParams = InferQueryParams<TypedQuery>;
type queryReturn = InferQueryReturn<TypedQuery>;
export type InferQueryParams<T> = InferTyped<T, 0>;
export type InferQueryReturn<T> = InferTyped<T, 1>;

function executeQuery<TQuery extends string>(
  query: TQuery,
  params?: InferQueryParams<TQuery>,
): InferQueryReturn<TQuery> {
  return { b: '2' } as InferQueryReturn<TQuery>;
}

const result = executeQuery(typedQuery);
