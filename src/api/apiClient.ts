import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://universities.hipolabs.com/",
});

export const apiClientFetch = async <T>(url: string) => {
  try {
    const { data } = await apiClient.get<T>(url);
    return data;
  } catch (err) {
    throw err;
  }
};
