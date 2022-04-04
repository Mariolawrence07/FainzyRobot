import axios from "axios";

const Http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default Http;
