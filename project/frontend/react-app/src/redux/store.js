import { configureStore } from '@reduxjs/toolkit';
import { createReducer } from 'utils/reduxHelper';
import appReducer from "./reducers/appReducer";

const store = configureStore({
  reducer: createReducer({
    app: appReducer
  })
});

export default store;