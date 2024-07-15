import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "./anime-list/slices";
import { animeApi } from "@/api";

export const store = configureStore({
  reducer: {
    anime: animeReducer,
    [animeApi.reducerPath]: animeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;