import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { incrementDebounceEpic } from './epics/counter';

import counterReducer from './slices/counterSlice';

const rootEpic = combineEpics(
  incrementDebounceEpic,
);
const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
