import { configureStore } from '@reduxjs/toolkit';
import { createReducer } from 'utils/reduxHelper';
import appReducer from "./reducers/appReducer";

const store = configureStore({
  reducer: createReducer({
    app: appReducer,
    //page1: page1Reducer,
    //page2: page2Reducer
  })
});

export default store;