import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3009",
});

export const getDadosDaAPI = async () => {
  try {
    const response = await api.get("/list");
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
  console.log(productData, "<api");
  try {
    const response = await api.post("/create-products", productData);

    return response.data;
  } catch (error) {
    throw error;
  }
};
