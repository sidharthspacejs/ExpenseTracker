import api from "./api";

export const getDashboardData = (period) => {
  const response = api.get("/admin/dashboard", {
    params: {
      period,
    },
  });
};
