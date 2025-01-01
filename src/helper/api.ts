import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL+'/api',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Configurar token en el encabezado
const token = localStorage.getItem('authToken');
if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
}

export default api;