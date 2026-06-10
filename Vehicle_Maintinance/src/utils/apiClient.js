const axios = require("axios");

const apiClient = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
    "Content-Type": "application/json",
  },
});

module.exports = apiClient;