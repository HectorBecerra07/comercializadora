import apiClient from "./client";

export const login = async (email, password) => {
  try {
    const response = await apiClient.post("/auth/login", { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
