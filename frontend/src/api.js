import axios from "axios";

const api = axios.create({
//   baseURL: "http://127.0.0.1:8000/api"
  baseURL: "https://crud-with-react-and-laravel-production.up.railway.app/api"
});

export default api;