import { FainzyAPI } from "configs/StoreQueryConfig";

const baseURL = "/entities";

const AuthenticationAPI = FainzyAPI.injectEndpoints({
  endpoints: (builder) => ({
    activate: builder.query({
      query: (id) => ({
        url: `${baseURL}/entities/activate/${id}`,
      }),
    }),
    create: builder.mutation({
      query: (data) => ({
        url: `${baseURL}/create`,
        method: "POST",
        data,
      }),
    }),
  }),
});

export default AuthenticationAPI;
