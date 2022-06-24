import { FainzyHttp } from "./HttpConfig";
import { logoutAction } from "./StoreActionConfig";
// import { logoutAction } from "./StoreActionConfig";
import store from "./StoreConfig";
import { setAuthUser } from "./StoreSliceConfig";

FainzyHttp.interceptors.request.use((config) => {
  const { token } = store.getState()?.global?.authUser || {};

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

FainzyHttp.interceptors.response.use(undefined, async function (error) {
  const { preRefreshToken } = store.getState()?.global?.authUser || {};
  const originalRequest = error.config;
  if (error.response.status === 401) {
    try {
      // try to get a new token
      const refreshResult = await FainzyHttp.get(
        `/api/Auth/refresh_user_token/${preRefreshToken}/${process.env.REACT_APP_TENANT_ID}`
      );
      if (refreshResult?.data?.data) {
        // store the new token
        store.dispatch(setAuthUser(refreshResult?.data?.data));
        return FainzyHttp(originalRequest);
      } else {
        store.dispatch(logoutAction());
      }
    } catch (error) {
      store.dispatch(logoutAction());
    }
  }
  return Promise.reject(error);
});
