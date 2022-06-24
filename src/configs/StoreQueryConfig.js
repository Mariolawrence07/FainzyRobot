import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { StoreQueryTagEnum } from "common/constants";

export const FainzyAPI = createApi({
  reducerPath: "Fainzy",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.fainzy.ai/v1/" }),
  endpoints: (builder) => ({}),
});

[FainzyAPI].forEach((api) => {
  api.enhanceEndpoints({ addTagTypes: Object.values(StoreQueryTagEnum) });
});

/**
 *
 * @param {import("axios").AxiosRequestConfig} baseConfig
 */
export function axiosBaseQuery(baseConfig = {}, http = axios) {
  return request;

  /**
   *
   * @param {import("axios").AxiosRequestConfig} config
   */
  async function request(config = {}) {
    const url = config.url
      ? (baseConfig.url || "") + config.url
      : baseConfig.url;
    try {
      const response = await http.request({ ...baseConfig, ...config, url });

      return {
        ...response,
        data: response.data,
        message: response.data?.message || null,
        status: response.status || 200,
        meta: { request: response.request, response },
      };
    } catch (error) {
      // console.log("axiosBaseQuery-Error", error);
      return {
        error: error.response
          ? {
              defaultUserMessage: "",
              status: error.response.status,
              data: error.response.data,
            }
          : {
              defaultUserMessage: "Something went wrong",
              data: { defaultUserMessage: "Something went wrong" },
            },
      };
    }
  }
}
