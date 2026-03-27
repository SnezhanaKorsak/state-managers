import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import { appReducer } from './app/slice';
import { todoReducer } from './todo/slice';

const storage = {
  getItem: (key: string) => {
    return Promise.resolve(localStorage.getItem(key));
  },
  setItem: (key: string, value: string) => {
    localStorage.setItem(key, value);
    return Promise.resolve(value);
  },
  removeItem: (key: string) => {
    localStorage.removeItem(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedTodoReducer = persistReducer(persistConfig, todoReducer);

export const rootReducer = combineReducers({
  todo: persistedTodoReducer,
  app: appReducer,
});
