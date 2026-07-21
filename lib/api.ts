import axios from "axios";

// Create a reusable Axios instance
const api = axios.create({
  // This will pull the URL we set in .env.local (http://localhost:8080)
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  
  // Important: This allows sending cookies and authorization headers
  withCredentials: true,
  
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
