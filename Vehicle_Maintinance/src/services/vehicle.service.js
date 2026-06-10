const apiClient = require("../utils/apiClient");

const getVehicles = async () => {
  const response = await apiClient.get("/vehicles");

  return response.data;
};

module.exports = {
  getVehicles,
};