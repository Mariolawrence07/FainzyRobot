import axios from "axios";

export const FainzyHttp = axios.create({
  baseURL: "https://api.fainzy.ai/v1/",
  headers: {
    withCredentials: false,
    // "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default FainzyHttp;
