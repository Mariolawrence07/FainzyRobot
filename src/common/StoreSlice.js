import {createSlice, createAction} from '@reduxjs/toolkit';
import {fainzy} from './StoreQuerySlice';

export const logoutAction = createAction ('common/logout');

export const globalInitialState = {
  isNavOnDark: false,
  isLoadingModal: false,
  isAdminNavigationSidebar: true,
  authUser: null,
  accessToken: null,
};

const slice = createSlice ({
  name: 'global',
  initialState: globalInitialState,
  reducers: {
    toggleNavOnDarkAction: (state, {payload}) => {
      state.isNavOnDark = typeof payload === 'boolean'
        ? payload
        : !state.isNavOnDark;
    },
    toggleLoadingModalAction: (state, {payload}) => {
      state.isLoadingModal = typeof payload === 'boolean'
        ? payload
        : !state.isLoadingModal;
    },
    toggleAdminNavigationSidebarAction: (state, {payload}) => {
      state.isAdminNavigationSidebar = typeof payload === 'boolean'
        ? payload
        : !state.isAdminNavigationSidebar;
    },
  },
  extraReducers: builder =>
    builder
      .addCase (logoutAction, () => ({...globalInitialState}))
      .addMatcher (
        fainzy.endpoints.login.matchFulfilled,
        (state, {payload}) => {
          state.accessToken = payload.access_token;
        }
      )
      .addMatcher (
        fainzy.endpoints.getProfile.matchFulfilled,
        (state, {payload}) => {
          state.authUser = payload.data;
        }
      ),
});

export const {
  toggleNavOnDarkAction,
  toggleLoadingModalAction,
  toggleAdminNavigationSidebarAction,
} = slice.actions;

export default slice;

export function getGlobalSliceStorageState({accessToken}) {
  return {accessToken};
}
