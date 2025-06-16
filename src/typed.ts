declare const type0Symbol: unique symbol;
declare const type1Symbol: unique symbol;
declare const type2Symbol: unique symbol;
declare const type3Symbol: unique symbol;
declare const type4Symbol: unique symbol;
declare const type5Symbol: unique symbol;
declare const type6Symbol: unique symbol;
declare const type7Symbol: unique symbol;
declare const type8Symbol: unique symbol;
declare const type9Symbol: unique symbol;

/**
 * A list of unique symbols used for creating branded types.
 */
type TypeSymbols = [
  typeof type0Symbol,
  typeof type1Symbol,
  typeof type2Symbol,
  typeof type3Symbol,
  typeof type4Symbol,
  typeof type5Symbol,
  typeof type6Symbol,
  typeof type7Symbol,
  typeof type8Symbol,
  typeof type9Symbol,
];

/**
 * A branded type that holds a reference to type `T` at a specific index.
 *
 * @template TType The type to be referenced.
 * @template TIndex The index of the type in the type symbol list.
 */
export type Typed<TType, TIndex extends keyof TypeSymbols & number> = {
  [K in TypeSymbols[TIndex]]: TType;
};
/**
 * Infers the type `TType` from a `Typed<TType, TIndex>` type.
 *
 * @template TBase The `Typed` type to infer from.
 * @template TIndex The index of the type in the type symbol list.
 */
export type InferTyped<
  TBase,
  TIndex extends keyof TypeSymbols & number,
> = TBase extends {
  [K in TypeSymbols[TIndex]]: infer TType;
}
  ? TType
  : never;

export function typed<T0, TBase>(value: TBase): TBase & Typed<T0, 0>;
export function typed<T0, T1, TBase>(
  value: TBase,
): TBase & Typed<T0, 0> & Typed<T1, 1>;
export function typed<T0, T1, T2, TBase>(
  value: TBase,
): TBase & Typed<T0, 0> & Typed<T1, 1> & Typed<T2, 2>;
export function typed<T0, T1, T2, T3, TBase>(
  value: TBase,
): TBase & Typed<T0, 0> & Typed<T1, 1> & Typed<T2, 2> & Typed<T3, 3>;
export function typed<T0, T1, T2, T3, T4, TBase>(
  value: TBase,
): TBase &
  Typed<T0, 0> &
  Typed<T1, 1> &
  Typed<T2, 2> &
  Typed<T3, 3> &
  Typed<T4, 4>;
export function typed<T0, T1, T2, T3, T4, T5, TBase>(
  value: TBase,
): TBase &
  Typed<T0, 0> &
  Typed<T1, 1> &
  Typed<T2, 2> &
  Typed<T3, 3> &
  Typed<T4, 4> &
  Typed<T5, 5>;
export function typed<T0, T1, T2, T3, T4, T5, T6, TBase>(
  value: TBase,
): TBase &
  Typed<T0, 0> &
  Typed<T1, 1> &
  Typed<T2, 2> &
  Typed<T3, 3> &
  Typed<T4, 4> &
  Typed<T5, 5> &
  Typed<T6, 6>;
export function typed<T0, T1, T2, T3, T4, T5, T6, T7, TBase>(
  value: TBase,
): TBase &
  Typed<T0, 0> &
  Typed<T1, 1> &
  Typed<T2, 2> &
  Typed<T3, 3> &
  Typed<T4, 4> &
  Typed<T5, 5> &
  Typed<T6, 6> &
  Typed<T7, 7>;
export function typed<T0, T1, T2, T3, T4, T5, T6, T7, T8, TBase>(
  value: TBase,
): TBase &
  Typed<T0, 0> &
  Typed<T1, 1> &
  Typed<T2, 2> &
  Typed<T3, 3> &
  Typed<T4, 4> &
  Typed<T5, 5> &
  Typed<T6, 6> &
  Typed<T7, 7> &
  Typed<T8, 8>;
export function typed<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, TBase>(
  value: TBase,
): TBase &
  Typed<T0, 0> &
  Typed<T1, 1> &
  Typed<T2, 2> &
  Typed<T3, 3> &
  Typed<T4, 4> &
  Typed<T5, 5> &
  Typed<T6, 6> &
  Typed<T7, 7> &
  Typed<T8, 8> &
  Typed<T9, 9>;

/**
 * Creates a branded type with the given types.
 */
export function typed(value: any): any {
  return value;
}
