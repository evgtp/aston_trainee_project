import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import pagination from "./slices/paginationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    pagination,
  },
});
