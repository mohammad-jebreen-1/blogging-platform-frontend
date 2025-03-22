import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_API_URL
      : "http://localhost:3000",
});

export default axiosInstance;
