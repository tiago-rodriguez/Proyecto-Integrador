import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSearch = createAction("SET_SEARCH");
const initialState = [];
const searchReducer = createReducer(
  initialState,

  {
    [setSearch]: (state, action) => action.payload,
  }
);

export default searchReducer;
