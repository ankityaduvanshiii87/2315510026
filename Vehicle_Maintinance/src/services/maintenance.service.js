const apiClient = require("../utils/apiClient");

const getMaintenanceTasks = async () => {
  const response = await apiClient.get("/maintenance");

  return response.data;
};

module.exports = {
  getMaintenanceTasks,
};