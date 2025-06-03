import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:5079/api', // ajuste conforme o endereço local da sua API
});

export default api;
