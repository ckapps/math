export type OperatorFunction<T, R> = (arg: T) => R;

export type MonoOperatorFunction<T> = OperatorFunction<T, T>;
