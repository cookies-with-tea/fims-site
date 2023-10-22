export type ValidatorType<T> = (value: T) => [status: boolean, message: string];
