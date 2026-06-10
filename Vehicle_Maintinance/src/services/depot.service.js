const apiClient = require("../utils/apiClient");

const getDepots = async () => {
  const response = await apiClient.get("/depots");

  return response.data;
};

module.exports = {
  getDepots,
};