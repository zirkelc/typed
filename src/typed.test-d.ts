import { expectTypeOf, test } from 'vitest';
import { type InferTyped, typed } from './typed.js';

type T0 = {
  value: string;
};

type T1 = {
  value: string;
};

type T2 = {
  value: string;
};

type T3 = {
  value: string;
};

type T4 = {
  value: string;
};

type T5 = {
  value: string;
};

type T6 = {
  value: string;
};

type T7 = {
  value: string;
};

type T8 = {
  value: string;
};

type T9 = {
  value: string;
};

test('typed<T0>', () => {
  const str = typed<T0, string>('test');
  expectTypeOf<typeof str>().toBeString();
  expectTypeOf<typeof str>().toMatchTypeOf<string>();
  expectTypeOf<InferTyped<typeof str, 0>>().toEqualTypeOf<T0>();

  const num = typed<T0, number>(1);
  expectTypeOf<typeof num>().toBeNumber();
  expectTypeOf<typeof num>().toMatchTypeOf<number>();

  const bool = typed<T0, boolean>(true);
  expectTypeOf<typeof bool>().toBeBoolean();
  expectTypeOf<typeof bool>().toMatchTypeOf<boolean>();

  const obj = typed<T0, { a: string }>({ a: 'b' });
  expectTypeOf<typeof obj>().toBeObject();
  expectTypeOf<typeof obj>().toMatchTypeOf<{ a: string }>();

  const arr = typed<T0, Array<string>>(['a', 'b']);
  expectTypeOf<typeof arr>().toBeArray();
  expectTypeOf<typeof arr>().toMatchTypeOf<Array<string>>();
});

test('typed<T0, T1>', () => {
  const str = typed<T0, T1, string>('test');
  expectTypeOf<typeof str>().toBeString();
  expectTypeOf<typeof str>().toMatchTypeOf<string>();
  expectTypeOf<InferTyped<typeof str, 0>>().toEqualTypeOf<T0>();
  expectTypeOf<InferTyped<typeof str, 1>>().toEqualTypeOf<T1>();

  const num = typed<T0, T1, number>(1);
  expectTypeOf<typeof num>().toBeNumber();
  expectTypeOf<typeof num>().toMatchTypeOf<number>();

  const bool = typed<T0, T1, boolean>(true);
  expectTypeOf<typeof bool>().toBeBoolean();
  expectTypeOf<typeof bool>().toMatchTypeOf<boolean>();

  const obj = typed<T0, T1, { a: string }>({ a: 'b' });
  expectTypeOf<typeof obj>().toBeObject();
  expectTypeOf<typeof obj>().toMatchTypeOf<{ a: string }>();

  const arr = typed<T0, T1, Array<string>>(['a', 'b']);
  expectTypeOf<typeof arr>().toBeArray();
  expectTypeOf<typeof arr>().toMatchTypeOf<Array<string>>();
});

test('typed<T0, T1, T2>', () => {
  const str = typed<T0, T1, T2, string>('test');
  expectTypeOf<typeof str>().toBeString();
  expectTypeOf<typeof str>().toMatchTypeOf<string>();
  expectTypeOf<InferTyped<typeof str, 0>>().toEqualTypeOf<T0>();
  expectTypeOf<InferTyped<typeof str, 1>>().toEqualTypeOf<T1>();
  expectTypeOf<InferTyped<typeof str, 2>>().toEqualTypeOf<T2>();

  const num = typed<T0, T1, T2, number>(1);
  expectTypeOf<typeof num>().toBeNumber();
  expectTypeOf<typeof num>().toMatchTypeOf<number>();

  const bool = typed<T0, T1, T2, boolean>(true);
  expectTypeOf<typeof bool>().toBeBoolean();
  expectTypeOf<typeof bool>().toMatchTypeOf<boolean>();

  const obj = typed<T0, T1, T2, { a: string }>({ a: 'b' });
  expectTypeOf<typeof obj>().toBeObject();
  expectTypeOf<typeof obj>().toMatchTypeOf<{ a: string }>();

  const arr = typed<T0, T1, T2, Array<string>>(['a', 'b']);
  expectTypeOf<typeof arr>().toBeArray();
  expectTypeOf<typeof arr>().toMatchTypeOf<Array<string>>();
});

test('typed<T0, T1, T2, T3>', () => {
  const str = typed<T0, T1, T2, T3, string>('test');
  expectTypeOf<typeof str>().toBeString();
  expectTypeOf<typeof str>().toMatchTypeOf<string>();
  expectTypeOf<InferTyped<typeof str, 0>>().toEqualTypeOf<T0>();
  expectTypeOf<InferTyped<typeof str, 1>>().toEqualTypeOf<T1>();
  expectTypeOf<InferTyped<typeof str, 2>>().toEqualTypeOf<T2>();
  expectTypeOf<InferTyped<typeof str, 3>>().toEqualTypeOf<T3>();

  const num = typed<T0, T1, T2, T3, number>(1);
  expectTypeOf<typeof num>().toBeNumber();
  expectTypeOf<typeof num>().toMatchTypeOf<number>();

  const bool = typed<T0, T1, T2, T3, boolean>(true);
  expectTypeOf<typeof bool>().toBeBoolean();
  expectTypeOf<typeof bool>().toMatchTypeOf<boolean>();

  const obj = typed<T0, T1, T2, T3, { a: string }>({ a: 'b' });
  expectTypeOf<typeof obj>().toBeObject();
  expectTypeOf<typeof obj>().toMatchTypeOf<{ a: string }>();

  const arr = typed<T0, T1, T2, T3, Array<string>>(['a', 'b']);
  expectTypeOf<typeof arr>().toBeArray();
  expectTypeOf<typeof arr>().toMatchTypeOf<Array<string>>();
});

test('typed<T0, T1, T2, T3, T4>', () => {
  const str = typed<T0, T1, T2, T3, T4, string>('test');
  expectTypeOf<typeof str>().toBeString();
  expectTypeOf<typeof str>().toMatchTypeOf<string>();
  expectTypeOf<InferTyped<typeof str, 0>>().toEqualTypeOf<T0>();
  expectTypeOf<InferTyped<typeof str, 1>>().toEqualTypeOf<T1>();
  expectTypeOf<InferTyped<typeof str, 2>>().toEqualTypeOf<T2>();
  expectTypeOf<InferTyped<typeof str, 3>>().toEqualTypeOf<T3>();
  expectTypeOf<InferTyped<typeof str, 4>>().toEqualTypeOf<T4>();

  const num = typed<T0, T1, T2, T3, T4, number>(1);
  expectTypeOf<typeof num>().toBeNumber();
  expectTypeOf<typeof num>().toMatchTypeOf<number>();

  const bool = typed<T0, T1, T2, T3, T4, boolean>(true);
  expectTypeOf<typeof bool>().toBeBoolean();
  expectTypeOf<typeof bool>().toMatchTypeOf<boolean>();

  const obj = typed<T0, T1, T2, T3, T4, { a: string }>({ a: 'b' });
  expectTypeOf<typeof obj>().toBeObject();
  expectTypeOf<typeof obj>().toMatchTypeOf<{ a: string }>();

  const arr = typed<T0, T1, T2, T3, T4, Array<string>>(['a', 'b']);
  expectTypeOf<typeof arr>().toBeArray();
  expectTypeOf<typeof arr>().toMatchTypeOf<Array<string>>();
});

test('typed<T0, T1, T2, T3, T4, T5>', () => {
  const str = typed<T0, T1, T2, T3, T4, T5, string>('test');
  expectTypeOf<typeof str>().toBeString();
  expectTypeOf<typeof str>().toMatchTypeOf<string>();
  expectTypeOf<InferTyped<typeof str, 0>>().toEqualTypeOf<T0>();
  expectTypeOf<InferTyped<typeof str, 1>>().toEqualTypeOf<T1>();
  expectTypeOf<InferTyped<typeof str, 2>>().toEqualTypeOf<T2>();
  expectTypeOf<InferTyped<typeof str, 3>>().toEqualTypeOf<T3>();
  expectTypeOf<InferTyped<typeof str, 4>>().toEqualTypeOf<T4>();
  expectTypeOf<InferTyped<typeof str, 5>>().toEqualTypeOf<T5>();

  const num = typed<T0, T1, T2, T3, T4, T5, number>(1);
  expectTypeOf<typeof num>().toBeNumber();
  expectTypeOf<typeof num>().toMatchTypeOf<number>();

  const bool = typed<T0, T1, T2, T3, T4, T5, boolean>(true);
  expectTypeOf<typeof bool>().toBeBoolean();
  expectTypeOf<typeof bool>().toMatchTypeOf<boolean>();

  const obj = typed<T0, T1, T2, T3, T4, T5, { a: string }>({ a: 'b' });
  expectTypeOf<typeof obj>().toBeObject();
  expectTypeOf<typeof obj>().toMatchTypeOf<{ a: string }>();

  const arr = typed<T0, T1, T2, T3, T4, T5, Array<string>>(['a', 'b']);
  expectTypeOf<typeof arr>().toBeArray();
  expectTypeOf<typeof arr>().toMatchTypeOf<Array<string>>();
});

test('typed<T0, T1, T2, T3, T4, T5, T6>', () => {
  const str = typed<T0, T1, T2, T3, T4, T5, T6, string>('test');
  expectTypeOf<typeof str>().toBeString();
  expectTypeOf<typeof str>().toMatchTypeOf<string>();
  expectTypeOf<InferTyped<typeof str, 0>>().toEqualTypeOf<T0>();
  expectTypeOf<InferTyped<typeof str, 1>>().toEqualTypeOf<T1>();
  expectTypeOf<InferTyped<typeof str, 2>>().toEqualTypeOf<T2>();
  expectTypeOf<InferTyped<typeof str, 3>>().toEqualTypeOf<T3>();
  expectTypeOf<InferTyped<typeof str, 4>>().toEqualTypeOf<T4>();
  expectTypeOf<InferTyped<typeof str, 5>>().toEqualTypeOf<T5>();
  expectTypeOf<InferTyped<typeof str, 6>>().toEqualTypeOf<T6>();

  const num = typed<T0, T1, T2, T3, T4, T5, T6, number>(1);
  expectTypeOf<typeof num>().toBeNumber();
  expectTypeOf<typeof num>().toMatchTypeOf<number>();

  const bool = typed<T0, T1, T2, T3, T4, T5, T6, boolean>(true);
  expectTypeOf<typeof bool>().toBeBoolean();
  expectTypeOf<typeof bool>().toMatchTypeOf<boolean>();

  const obj = typed<T0, T1, T2, T3, T4, T5, T6, { a: string }>({ a: 'b' });
  expectTypeOf<typeof obj>().toBeObject();
  expectTypeOf<typeof obj>().toMatchTypeOf<{ a: string }>();

  const arr = typed<T0, T1, T2, T3, T4, T5, T6, Array<string>>(['a', 'b']);
  expectTypeOf<typeof arr>().toBeArray();
  expectTypeOf<typeof arr>().toMatchTypeOf<Array<string>>();
});

test('typed<T0, T1, T2, T3, T4, T5, T6, T7>', () => {
  const str = typed<T0, T1, T2, T3, T4, T5, T6, T7, string>('test');
  expectTypeOf<typeof str>().toBeString();
  expectTypeOf<typeof str>().toMatchTypeOf<string>();
  expectTypeOf<InferTyped<typeof str, 0>>().toEqualTypeOf<T0>();
  expectTypeOf<InferTyped<typeof str, 1>>().toEqualTypeOf<T1>();
  expectTypeOf<InferTyped<typeof str, 2>>().toEqualTypeOf<T2>();
  expectTypeOf<InferTyped<typeof str, 3>>().toEqualTypeOf<T3>();
  expectTypeOf<InferTyped<typeof str, 4>>().toEqualTypeOf<T4>();
  expectTypeOf<InferTyped<typeof str, 5>>().toEqualTypeOf<T5>();
  expectTypeOf<InferTyped<typeof str, 6>>().toEqualTypeOf<T6>();
  expectTypeOf<InferTyped<typeof str, 7>>().toEqualTypeOf<T7>();

  const num = typed<T0, T1, T2, T3, T4, T5, T6, T7, number>(1);
  expectTypeOf<typeof num>().toBeNumber();
  expectTypeOf<typeof num>().toMatchTypeOf<number>();

  const bool = typed<T0, T1, T2, T3, T4, T5, T6, T7, boolean>(true);
  expectTypeOf<typeof bool>().toBeBoolean();
  expectTypeOf<typeof bool>().toMatchTypeOf<boolean>();

  const obj = typed<T0, T1, T2, T3, T4, T5, T6, T7, { a: string }>({ a: 'b' });
  expectTypeOf<typeof obj>().toBeObject();
  expectTypeOf<typeof obj>().toMatchTypeOf<{ a: string }>();

  const arr = typed<T0, T1, T2, T3, T4, T5, T6, T7, Array<string>>(['a', 'b']);
  expectTypeOf<typeof arr>().toBeArray();
  expectTypeOf<typeof arr>().toMatchTypeOf<Array<string>>();
});

test('typed<T0, T1, T2, T3, T4, T5, T6, T7, T8>', () => {
  const str = typed<T0, T1, T2, T3, T4, T5, T6, T7, T8, string>('test');
  expectTypeOf<typeof str>().toBeString();
  expectTypeOf<typeof str>().toMatchTypeOf<string>();
  expectTypeOf<InferTyped<typeof str, 0>>().toEqualTypeOf<T0>();
  expectTypeOf<InferTyped<typeof str, 1>>().toEqualTypeOf<T1>();
  expectTypeOf<InferTyped<typeof str, 2>>().toEqualTypeOf<T2>();
  expectTypeOf<InferTyped<typeof str, 3>>().toEqualTypeOf<T3>();
  expectTypeOf<InferTyped<typeof str, 4>>().toEqualTypeOf<T4>();
  expectTypeOf<InferTyped<typeof str, 5>>().toEqualTypeOf<T5>();
  expectTypeOf<InferTyped<typeof str, 6>>().toEqualTypeOf<T6>();
  expectTypeOf<InferTyped<typeof str, 7>>().toEqualTypeOf<T7>();
  expectTypeOf<InferTyped<typeof str, 8>>().toEqualTypeOf<T8>();

  const num = typed<T0, T1, T2, T3, T4, T5, T6, T7, T8, number>(1);
  expectTypeOf<typeof num>().toBeNumber();
  expectTypeOf<typeof num>().toMatchTypeOf<number>();

  const bool = typed<T0, T1, T2, T3, T4, T5, T6, T7, T8, boolean>(true);
  expectTypeOf<typeof bool>().toBeBoolean();
  expectTypeOf<typeof bool>().toMatchTypeOf<boolean>();

  const obj = typed<T0, T1, T2, T3, T4, T5, T6, T7, T8, { a: string }>({
    a: 'b',
  });
  expectTypeOf<typeof obj>().toBeObject();
  expectTypeOf<typeof obj>().toMatchTypeOf<{ a: string }>();

  const arr = typed<T0, T1, T2, T3, T4, T5, T6, T7, T8, Array<string>>([
    'a',
    'b',
  ]);
  expectTypeOf<typeof arr>().toBeArray();
  expectTypeOf<typeof arr>().toMatchTypeOf<Array<string>>();
});

test('typed<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>', () => {
  const str = typed<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, string>('test');
  expectTypeOf<typeof str>().toBeString();
  expectTypeOf<typeof str>().toMatchTypeOf<string>();
  expectTypeOf<InferTyped<typeof str, 0>>().toEqualTypeOf<T0>();
  expectTypeOf<InferTyped<typeof str, 1>>().toEqualTypeOf<T1>();
  expectTypeOf<InferTyped<typeof str, 2>>().toEqualTypeOf<T2>();
  expectTypeOf<InferTyped<typeof str, 3>>().toEqualTypeOf<T3>();
  expectTypeOf<InferTyped<typeof str, 4>>().toEqualTypeOf<T4>();
  expectTypeOf<InferTyped<typeof str, 5>>().toEqualTypeOf<T5>();
  expectTypeOf<InferTyped<typeof str, 6>>().toEqualTypeOf<T6>();
  expectTypeOf<InferTyped<typeof str, 7>>().toEqualTypeOf<T7>();
  expectTypeOf<InferTyped<typeof str, 8>>().toEqualTypeOf<T8>();
  expectTypeOf<InferTyped<typeof str, 9>>().toEqualTypeOf<T9>();

  const num = typed<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, number>(1);
  expectTypeOf<typeof num>().toBeNumber();
  expectTypeOf<typeof num>().toMatchTypeOf<number>();

  const bool = typed<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, boolean>(true);
  expectTypeOf<typeof bool>().toBeBoolean();
  expectTypeOf<typeof bool>().toMatchTypeOf<boolean>();

  const obj = typed<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, { a: string }>({
    a: 'b',
  });
  expectTypeOf<typeof obj>().toBeObject();
  expectTypeOf<typeof obj>().toMatchTypeOf<{ a: string }>();

  const arr = typed<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, Array<string>>([
    'a',
    'b',
  ]);
  expectTypeOf<typeof arr>().toBeArray();
  expectTypeOf<typeof arr>().toMatchTypeOf<Array<string>>();
});
