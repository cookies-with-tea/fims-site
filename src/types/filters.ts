import { OptionType, PaginationType } from './common'
import { UnionOrArray } from './data'

export type FiltersData = {
  title: string
  value: string
  uuid: string
  items: OptionType[]
}

export type SortType = {
  field: string
  direct: 'asc' | 'desc'
}

export type FetchPayloadOptionsType<T = unknown> = T & {
  filters: Record<string, UnionOrArray<string | number>>
  pagination: PaginationType,
  sort: SortType
}
