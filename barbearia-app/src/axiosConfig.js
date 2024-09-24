// axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
});

// Adiciona o token e clientId ao cabeçalho de autorização, se disponíveis
instance.interceptors.request.use(config => {
  const token = sessionStorage.getItem('token');
  const clientId = sessionStorage.getItem('clientId'); // Adiciona a leitura do clientId

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (clientId) {
    config.headers['Client-ID'] = clientId; // Adiciona o clientId ao cabeçalho, se necessário
  }

  return config;
}, error => {
  return Promise.reject(error);
});

export default instance;
