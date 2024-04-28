import axios, { AxiosResponse } from "axios";
import { ParamsType, ReturnType } from "./ApiServiceType";

const API_KEY = "zptrX55x2qZApiVKm68RNNqVMOk5s6W9N19uFgah3zI";
axios.defaults.baseURL = "https://api.unsplash.com/";

export const ApiService = async (
  query: string,
  page: number
): Promise<AxiosResponse<ReturnType>> => {
  const params: ParamsType = {
    client_id: API_KEY,
    query: query,
    per_page: 10,
    page: page,
  };
  const data = await axios.get<ReturnType>("/search/photos/", { params });
  console.log(data);

  return data;
};

export default ApiService;
