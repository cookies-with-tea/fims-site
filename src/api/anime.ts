import { AnimeListResponseType, FetchPayloadOptionsType, FiltersData } from '@/types'
import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react'
import { ANIME_LIST_MOCK_DATA } from '@/mocks/anime'
import { FILTERS_MOCK_DATA } from '@/mocks'

const fakeBaseQuery: BaseQueryFn = async ({ url, method }) => {
  switch (url) {
    case 'filters':
      return { data: FILTERS_MOCK_DATA }
    case 'anime-list':
      return { data: ANIME_LIST_MOCK_DATA }
    default:
      return { error: 'Unknown request' }
  }
}

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fakeBaseQuery, //TODO: При интеграции заменить на fetchBaseQuery({ baseUrl: '/api/v1' }),
  endpoints: (builder) => ({
    getFilters: builder.query<FiltersData[], void>({
      query: () => ({
        url: 'filters',
        method: 'POST',
      }),
    }),
    getAnimeList: builder.query<AnimeListResponseType, FetchPayloadOptionsType>({
      query: (payloadFilters) => ({
        url: 'anime-list',
        method: 'POST',
        body: payloadFilters,
      }),
    }),
  }),
})

export const { useGetFiltersQuery, useLazyGetAnimeListQuery } = animeApi
