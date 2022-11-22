import { localesReducer } from "../reducers/localesReducer";
import { userReducer } from "../reducers/userReducer";
const { configureStore } = require("@reduxjs/toolkit");
const reducer = {
  user: userReducer,
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
