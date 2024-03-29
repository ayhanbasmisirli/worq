import { configureStore } from "@reduxjs/toolkit";
import UserInfoSlice from "./slice";

export const store = configureStore({
  reducer: {
    UserInfoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
