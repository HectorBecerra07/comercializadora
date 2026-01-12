import apiClient from "./client";

export const getProducts = async () => {
  try {
    const response = await apiClient.get("/products");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
