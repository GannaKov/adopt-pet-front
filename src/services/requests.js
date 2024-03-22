import axios from "axios";

//const BASEURL = "http://localhost:3000";
const BASEURL = import.meta.env.VITE_BASE_URL;
const instance = axios.create({ baseURL: BASEURL });

// export async function homeLoader() {
//   const categories = await getCategories();
//   console.log("categor in loader", categories);
//   return categories;
// }

export const getCategoriesLoder = async () => {
  const { data } = await instance.get("/animals");
  return data.data;
};

export const getLimitedAnimalsLoader = async () => {
  const { data } = await instance.get("/main-page");

  return data.data;
};

export const getByTypeLoader = async ({ params }) => {
  try {
    const { data } = await instance.get(`/animals/${params.pet_type}`);

    return data.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      const customError = {
        response: {
          statusText: `There is no any animal ${params.pet_type} `,
          status: 404,
        },
      };
      throw customError;
    } else {
      throw error;
    }
  }
};

export const getSinglePetLoader = async ({ params }) => {
  try {
    const { data } = await instance.get(
      `/animals/${params.pet_type}/${params.pet_id}`
    );
    return data.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      const customError = {
        response: {
          statusText: `There is no pet ${params.pet_type} with id ${params.pet_id}`,
          status: 404,
        },
      };
      throw customError;
    } else {
      throw error;
    }
  }
};

export const sendContactForm = async (values) => {
  const { data } = await instance.post(`/contact-form`, values);
  console.log("data from backend", data);
  return data;
};
