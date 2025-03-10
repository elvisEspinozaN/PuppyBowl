import { configureStore } from "@reduxjs/toolkit";
import api from "./api";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },

  // data fetching, cache invalidation...
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
