import { configureStore } from "@reduxjs/toolkit";
import specSplice from "./specifations";
import api from "@/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    specification: specSplice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
