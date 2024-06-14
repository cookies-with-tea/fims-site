import { AnimeCardResponseType, ListResponseType } from '@/types'
import { fakeFetch } from './instance/fetch'
import { ANIME_LIST_MOCK_DATA } from '@/mocks/anime'

const getAnimeList = async () => {
  return fakeFetch<ListResponseType<AnimeCardResponseType>>('', 
    {
      method: 'get',
    },
  ANIME_LIST_MOCK_DATA,
  )
}

export const animeApi = {
  getAnimeList,
}
