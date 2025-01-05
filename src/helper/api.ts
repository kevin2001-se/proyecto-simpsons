import axios from "axios";
import Cookies from "js-cookie"; // Importar js-cookie

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL+'/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true,
});


// Función para agregar el token antes de cada solicitud
api.interceptors.request.use(config => {
    // Obtener el token CSRF de la cookie XSRF-TOKEN
    const csrfToken = Cookies.get('XSRF-TOKEN');
    
    if (csrfToken) {
        // Si existe el token CSRF, agregarlo a las cabeceras de la solicitud
        config.headers['X-CSRF-TOKEN'] = csrfToken;
    }

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