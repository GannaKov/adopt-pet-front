import axios from "axios";

const BASEURL = "http://localhost:3000";

const instance = axios.create({ baseURL: BASEURL });

export const getCategories = async () => {
  const { data } = await instance.get("/animals");
  return data;
};

export const getLimitedAnimals = async () => {
  const { data } = await instance.get("/main-page");
  console.log(data);
  return data;
};

export const getByType = async (type) => {
  const { data } = await instance.get(`/animals/${type}`);

  return data;
};
