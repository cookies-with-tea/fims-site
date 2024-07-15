import { AnimeCardResponseType, FetchPayloadOptionsType, FiltersData, ListResponseType } from '@/types'
import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { fakeFetch } from './instance/fetch'
import { ANIME_LIST_MOCK_DATA } from '@/mocks/anime'
import { FILTERS_MOCK_DATA } from '@/mocks'

const fakeBaseQuery: BaseQueryFn = async ({ url, method }) => {
  switch (url) {
    case 'filters':
      return { data: FILTERS_MOCK_DATA };
    case 'anime-list':
      return { data: ANIME_LIST_MOCK_DATA };
    default:
      return { error: 'Unknown request' };
  }
};


export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fakeBaseQuery,
  endpoints: (builder) => ({
    getFilters: builder.query<FiltersData[], void>({
      query: () => ({
        url: 'filters',
        method: 'GET',
      }),
    }),
    getAnimeList: builder.query<AnimeCardResponseType[], FetchPayloadOptionsType>({
      query: (payloadFilters) => ({
        url: 'anime-list',
        method: 'POST',
        body: payloadFilters,
      }),
    }),
  }),
});

export const { useGetFiltersQuery, useLazyGetAnimeListQuery } = animeApi;
