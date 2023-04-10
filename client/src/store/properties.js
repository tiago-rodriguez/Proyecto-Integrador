import { createAction, createReducer } from "@reduxjs/toolkit";

export const deleteProperty = createAction("DELETE_PROPERTY");
export const setProperty = createAction("SET_PROPERTY");

const initialState = {
  title: null,
  description: null,
  adress: null,
  category: null,
  city: null,
  locate: null,
  country: null,
  image: null,
  operation: null,
  enviroments: null,
  bathrooms: null,
  meters: null,
  rooms: null,
  price: null,
};

const propertyReducer = createReducer(initialState, {
  [deleteProperty]: (state, action) => ({}),
});

export default propertyReducer;
