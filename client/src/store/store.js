import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "./user";
import searchReducer from "./search";
import propertyReducer from "./properties";
const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    search: searchReducer,
    property: propertyReducer,
  },
});

export default store;
