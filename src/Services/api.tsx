import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3009",
});

export const getDadosDaAPI = async () => {
  try {
    const response = await api.get("/list");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (productData: {
  name: string;
  price: number;
  productCode: number;
  description: string;
}) => {
  try {
    const response = await api.post("/create-products", productData);

    return response.data;
  } catch (error) {
    throw error;
  }
};


export const updateProduct = async (productId: string, updatedData: {
  name?: string;
  price?: number;
  productCode?: number;
  description?: string;
}) => {
  try {
    const response = await api.put(`/update-products/${productId}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (productId: string) => {
  try {
    const response = await api.delete(`/delete-products/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
