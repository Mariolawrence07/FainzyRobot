import { createApi } from "@reduxjs/toolkit/query/react";
import { RtkqTagEnum } from "./Constants";
import Http from "./Http";

export const fainzy = createApi({
  reducerPath: "fainzy",
  baseQuery: axiosBaseQuery({ url: "/users" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({ url: "/login", data, method: "post" }),
    }),
    register: builder.mutation({
      query: (data) => ({ url: "/users/", data, method: "post" }),
    }),
    getProfile: builder.query({
      queryFn: (_, { getState }, ___, baseQuery) => {
        return baseQuery({ url: "/users/" + getState().global.authUser.id });
      },
    }),
  }),
});

[fainzy].forEach((api) => {
  api.enhanceEndpoints({ addTagTypes: Object.values(RtkqTagEnum) });
});

/**
 *
 * @param {import("axios").AxiosRequestConfig} baseConfig
 */
export function axiosBaseQuery(baseConfig) {
  return request;

  /**
   *
   * @param {import("axios").AxiosRequestConfig} config
   */
  async function request(config = {}) {
    const url = config.url ? baseConfig.url + config.url : baseConfig.url;
    try {
      const response = await Http.request({ ...baseConfig, ...config, url });

      return {
        ...response,
        data: response.data,
        message: response.data?.message || null,
        status: response.status || 200,
        meta: { request: response.request, response },
      };
    } catch (error) {
      return {
        error: error.response
          ? {
              message: "",
              status: error.response.status,
              data: error.response.data,
            }
          : {
              message: "Something went wrong",
              data: { message: "Something went wrong" },
            },
      };
    }
  }
}

export function provideTags(resultsWithIds, tagType, options = {}) {
  const { selectId = ({ id }) => id } = options;
  const listTag = { type: tagType, id: "LIST" };
  const result = resultsWithIds
    ? [
        listTag,
        ...resultsWithIds.map((result) => ({
          type: tagType,
          id: selectId(result),
        })),
      ]
    : [listTag];

  return result;
}

export function invalidatesTags(tagType, options = {}) {
  const { ids = [] } = options;
  const result = [
    { type: tagType, id: "LIST" },
    ...ids.map((id) => ({ type: tagType, id })),
  ];

  return result;
}
