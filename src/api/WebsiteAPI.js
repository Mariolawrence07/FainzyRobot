import { FainzyAPI } from "configs/StoreQueryConfig";

const baseURL = "/site";

const WebsiteAPI = FainzyAPI.injectEndpoints({
  endpoints: (builder) => ({
    content: builder.query({
      query: () => ({
        url: `${baseURL}/content`,
        method: "get",
      }),
    }),
  }),
});

export default WebsiteAPI;
