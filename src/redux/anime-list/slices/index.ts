import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { animeApi } from '@/api';
import { FiltersData, FetchPayloadOptionsType, AnimeCardResponseType, ListResponseType, UnionOrArray } from '@/types';

type AnimeState = {
  filters: FiltersData[];
  animeList: AnimeCardResponseType[];
  payloadFilters: FetchPayloadOptionsType;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: AnimeState = {
  filters: [],
  animeList: [],
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
};

export const fetchFiltersData = createAsyncThunk<FiltersData[]>('anime/fetchFiltersData', async () => {
  const response = await animeApi.getFilters();
  return response.data;
});

export const fetchAnimeList = createAsyncThunk<AnimeCardResponseType[], void, { state: { anime: AnimeState } }>(
  'anime/fetchAnimeList',
  async (_, { getState }) => {
    const state = getState();
    const { payloadFilters } = state.anime;
    const response = await animeApi.getAnimeList(payloadFilters);
    return response.data.items;
  }
);

const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    handleFilterChange: (state, action: PayloadAction<{ filterValue: string; optionValue: UnionOrArray<string> }>) => {
      const { filterValue, optionValue } = action.payload;

      state.payloadFilters.filters[filterValue] = optionValue;
    },
    handleSortChange: (state, action: PayloadAction<{ field: string; direct: 'asc' | 'desc' }>) => {
      const { field, direct } = action.payload;

      state.payloadFilters.sort = { field, direct };
    },
    setFilters: (state, action: PayloadAction<FiltersData[]>) => {
      state.filters = action.payload;
    },
    setPayloadFilters: (state, action: PayloadAction<FetchPayloadOptionsType>) => {
      state.payloadFilters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFiltersData.fulfilled, (state, action: PayloadAction<FiltersData[]>) => {
        state.filters = action.payload;
      })
      .addCase(fetchAnimeList.fulfilled, (state, action: PayloadAction<AnimeCardResponseType[]>) => {
        state.animeList = action.payload;
      })
      .addMatcher(
        (action) => action.type.startsWith('anime/') && action.type.endsWith('/pending'),
        (state) => {
          state.status = 'loading';
        }
      )
      .addMatcher(
        (action) => action.type.startsWith('anime/') && action.type.endsWith('/fulfilled'),
        (state) => {
          state.status = 'succeeded';
        }
      )
      .addMatcher(
        (action) => action.type.startsWith('anime/') && action.type.endsWith('/rejected'),
        (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        }
      );
  }
});

export const {
  handleFilterChange,
  handleSortChange,
  setFilters,
  setPayloadFilters,
} = animeSlice.actions;

export default animeSlice.reducer;