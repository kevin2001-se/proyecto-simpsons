import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL+'/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    withCredentials: true,
});

api.defaults.withXSRFToken = true;

// Función para agregar el token antes de cada solicitud
api.interceptors.request.use(config => {
    // Obtener el token de autenticación de localStorage y agregarlo a las cabeceras
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
        config.headers['Authorization'] = `Bearer ${authToken}`;
    }

    return config;
}, error => {
    return Promise.reject(error);
});

export default api;