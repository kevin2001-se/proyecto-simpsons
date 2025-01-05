import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL+'/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Función para agregar el token antes de cada solicitud
api.interceptors.request.use(config => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default api;