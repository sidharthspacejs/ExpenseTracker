import api from "./api";

export const getDashboardData = async (period) => {
  const response = await api.get("/admin/dashboard", {
    params: {
      period,
    },
  });

  return response.data;
};

export const getAllEmployees = async (status) => {
  const response = await api.get("/admin/view-employees", {
    params: {
      status,
    },
  });

  return response.data;
};
