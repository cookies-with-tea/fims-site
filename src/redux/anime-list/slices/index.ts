import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { animeApi } from '@/api'
import { FiltersData, FetchPayloadOptionsType, AnimeCardResponseType, UnionOrArray, AnimeListResponseType } from '@/types'

type AnimeState = {
  filters: FiltersData[]
  animeList: AnimeListResponseType
  payloadFilters: FetchPayloadOptionsType
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
};

const initialState: AnimeState = {
  filters: [],
  animeList: {
    items: [],
    pagination: {
      page: 1,
      limit: 10,
    },
  },
  payloadFilters: {
    filters: {},
    pagination: {
      page: 1,
      limit: 10,
    },
    sort: {
      field: 'uuid',
      direct: 'asc'
    }
  },
  status: 'idle',
  error: null
}

const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    handleFilterChange: (
      state,
      action: PayloadAction<{ filterValue: string; optionValue: UnionOrArray<string> }>
  ) => {
      const { filterValue, optionValue } = action.payload

      state.payloadFilters.filters[filterValue] = optionValue
    },
    handleSortChange: (state, action: PayloadAction<{ field: string; direct: 'asc' | 'desc' }>) => {
      const { field, direct } = action.payload

      console.log(field, direct)

      state.payloadFilters.sort = { field, direct }
    },
    setFilters: (state, action: PayloadAction<FiltersData[]>) => {
      state.filters = action.payload
    },
    setPayloadFilters: (state, action: PayloadAction<FetchPayloadOptionsType>) => {
      state.payloadFilters = action.payload
    },
    setAnimeList: (state, action: PayloadAction<AnimeListResponseType>) => {
      state.animeList = action.payload
    },
    setStatus: (state, action: PayloadAction<'idle' | 'loading' | 'succeeded' | 'failed'>) => {
      state.status = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        animeApi.endpoints.getFilters.matchFulfilled,
        (state, action: PayloadAction<FiltersData[]>) => {
          state.filters = action.payload
      })
      .addMatcher(
        animeApi.endpoints.getAnimeList.matchFulfilled,
        (state, action: PayloadAction<AnimeListResponseType>) => {
          state.animeList = action.payload
          state.status = 'succeeded'
      })
      .addMatcher(animeApi.endpoints.getAnimeList.matchPending, (state) => {
        state.status = 'loading'
      })
      .addMatcher(animeApi.endpoints.getAnimeList.matchRejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || null
      })
  }
})

export const {
  handleFilterChange,
  handleSortChange,
  setFilters,
  setPayloadFilters,
  setAnimeList,
  setStatus,
  setError,
} = animeSlice.actions

export default animeSlice.reducer