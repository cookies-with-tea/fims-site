import { AnimeCardResponseType, FetchPayloadOptionsType, FiltersData, ListResponseType } from '@/types'
import { fakeFetch } from './instance/fetch'
import { ANIME_LIST_MOCK_DATA } from '@/mocks/anime'
import { FILTERS_MOCK_DATA } from '@/mocks'

const getAnimeList = async (payload: FetchPayloadOptionsType) => {
  return fakeFetch<ListResponseType<AnimeCardResponseType>>('', 
    {
      method: 'post',
    },
  ANIME_LIST_MOCK_DATA,
  )
}

const getFilters = async () => {
  return fakeFetch<FiltersData[]>('', {
    method: 'get'
  }, 
  FILTERS_MOCK_DATA
  )
}

export const animeApi = {
  getAnimeList,
  getFilters,
}
