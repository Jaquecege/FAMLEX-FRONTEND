import axios from "axios";

const API = axios.create({
  baseURL: "famlex-backend-production.up.railway.app", // tu backend real
});

// Registro
export const registrarUsuario = (email, password) =>
  API.post("/register", { email, password });

// Login
export const iniciarSesion = (email, password) =>
  API.post("/login", { email, password });
