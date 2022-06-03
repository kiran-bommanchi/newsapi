import axios from "axios";

export const GetNewsData = (url) => {
  return axios.get(url);
};
