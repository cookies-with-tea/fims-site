export type ResponseType<T> = {
  data: T,
  errors: Array<Record<string, Array<Record<string, string>>>>
  messages: Array<string>
}