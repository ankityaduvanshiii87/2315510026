require("dotenv").config();
const axios = require("axios");

const Log = async (stack, level, pkg, message) => {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Log Created:", response.data);
  } catch (err) {
    console.error(
      "Logging Failed:",
      err.response?.data || err.message
    );
  }
};

module.exports = Log;