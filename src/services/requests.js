import axios from "axios";

const BASEURL = "http://localhost:3000";

const instance = axios.create({ baseURL: BASEURL });

export const getCategories = async () => {
  const { data } = await instance.get();
  return data;
};
