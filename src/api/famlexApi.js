import axios from "axios";

const API = axios.create({
  baseURL: "/api",
});

// Registro
eAPI.post("/register", { username: email, password });
API.post("/login", new URLSearchParams({ username: email, password }), {
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
});