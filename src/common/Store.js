import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query/react';
import {deepMerge, throttle, isObjectEmpty} from './Utils';
import globalSlice, {
  getGlobalSliceStorageState,
  globalInitialState,
  logoutAction,
} from './StoreSlice';
import {fainzy} from './StoreQuerySlice';

const store = configureStore ({
  reducer: {
    [globalSlice.name]: globalSlice.reducer,
    [fainzy.reducerPath]: fainzy.reducer,
  },
  preloadedState: loadState ({[globalSlice.name]: globalInitialState}),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware ().concat (
      fainzy.middleware,
      rtkqOnResetMiddleware (fainzy)
    ),
});

setupListeners (store.dispatch);

store.subscribe (
  throttle (() => {
    const state = store.getState ();
    saveState ({
      [globalSlice.name]: getGlobalSliceStorageState (state[globalSlice.name]),
    });
  }, 1000)
);

export default store;

function saveState (state) {
  try {
    const serializedState = JSON.stringify (state);
    localStorage.setItem ('@state', serializedState);
  } catch (error) {}
}

function loadState (initialState = {}) {
  try {
    const newState = Object.assign ({}, initialState);
    const storageState = getLocalStorageState ();
    if (storageState && !isObjectEmpty (storageState)) {
      Object.assign (newState, deepMerge (newState, storageState));
    }
    return newState;
  } catch (error) {}
  return undefined;
}

function getLocalStorageState () {
  const serializedState = localStorage.getItem ('@state');
  if (serializedState) {
    return JSON.parse (serializedState);
  }
  return null;
}

export function rtkqOnResetMiddleware (...apis) {
  return store => next => action => {
    const result = next (action);
    if (logoutAction.match (action)) {
      for (const api of apis) {
        store.dispatch (api.util.resetApiState ());
      }
    }
    return result;
  };
}
