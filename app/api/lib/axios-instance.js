import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.BACKEND_API_URL
      : "http://localhost:3500",
});

export default axiosInstance;
