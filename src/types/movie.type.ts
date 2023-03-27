import { Value } from "sass"
import { OptionType, RatingMpaaType } from "./common.type"

export type MoviesParamsType = {
  genres__title: string
  countries__title: string
  year: number
  search: string
  page: number
}

export type ApiMoviesResponseType = {
  count: number
  next: string
  previous: string
  results: MovieType[]
}

export type MovieType = {
  id: number
  title: string
  description: string
  subtitles?: boolean
  year: Date
  countries: OptionType[]
  genres: OptionType[]
  directors: OptionType[]
  scripts: OptionType[]
  producers: OptionType[]
  composers: OptionType[]
  painters: OptionType[]
  fees_us?: number
  fees_world?: number
  image: string
  age: number
  rating_mpaa: RatingMpaaType
  starring: OptionType[]
  roles_dubbed: OptionType[]
}



