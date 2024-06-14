export type OptionType<Value = string, Label = string> = {
  value: Value
  label: Label
}

export type ImageType = {
  alt?: string
  path: string
} | null

export type PaginationType = {
  page: number
  limit: number
  total?: number
}

export type ListResponseType<T> = {
  items: T[]
  pagination: PaginationType
}
