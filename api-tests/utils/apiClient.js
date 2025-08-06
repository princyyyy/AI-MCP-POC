const axios = require("axios");

const api = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000, // 5 second timeout
});

// Request interceptor for logging
api.interceptors.request.use(
  (config) => {
    console.log(
      `API Request: ${config.method?.toUpperCase()} ${config.baseURL}${
        config.url
      }`
    );
    return config;
  },
  (error) => {
    console.error("Request Error:", error.message);
    return Promise.reject(error);
  }
);

// Response interceptor for logging and error handling
api.interceptors.response.use(
  (response) => {
    console.log(
      `API Response: ${
        response.status
      } - ${response.config.method?.toUpperCase()} ${response.config.url}`
    );
    return response;
  },
  (error) => {
    console.error(
      `API Error: ${error.response?.status || "Network Error"} - ${
        error.message
      }`
    );
    // Return error response for testing instead of throwing
    if (error.response) {
      return error.response;
    }
    throw error;
  }
);

module.exports = {
  get: (url, config) => api.get(url, config),
  post: (url, data, config) => api.post(url, data, config),
  put: (url, data, config) => api.put(url, data, config),
  delete: (url, config) => api.delete(url, config),
  patch: (url, data, config) => api.patch(url, data, config),
};
