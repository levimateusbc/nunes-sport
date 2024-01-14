import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3009",
});

export const getDadosDaAPI = async () => {
  try {
    const response = await api.get("/findAll");
    console.log("response", response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (productData: {
  name: string;
  value: number;
  cod: number;
  description: string;
}) => {
  try {
    const response = await api.post("/createProduct", productData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
