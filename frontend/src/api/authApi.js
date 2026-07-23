import api from "./api.js";

export const login = async (username, password) => {
  const response = await api.post("/auth/login", {
    username,
    password,
  });

  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};
