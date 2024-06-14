import { ImageType, ListResponseType } from './common'

export type AnimeStatusType = 'Новый' | 'Онгоинг' | 'Фильм' // TODO: Исправить на ключи, чтобы использовать словарик

export type AnimeCardResponseType = {
  uuid: string
  title: string
  status: AnimeStatusType
  image: ImageType
  rating: number
  age: string
  year: string
  genre: string
  slug: string
}

export type AnimeListResponseType = ListResponseType<AnimeCardResponseType>
