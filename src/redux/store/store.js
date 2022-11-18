import { configureStore } from "@reduxjs/toolkit";
import { localesReducer } from "../reducers/localesReducer";
import { userReducer } from "../reducers/userReducer";

const reducer = {
  userStore: userReducer,
  locales: localesReducer
};
const store = configureStore({
  reducer,
  devTool: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
