import axios from "axios";

const API = axios.create({
  baseURL: "https://famlex-backend-production.up.railway.app/api", // ✅ URL CORRECTA del backend
});

// Registro
export const registrarUsuario = (email, password) =>
  API.post("/register", { email, password });

// Login
export const iniciarSesion = (email, password) =>
  API.post("/login", { email, password });
