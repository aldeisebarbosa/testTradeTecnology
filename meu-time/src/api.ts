import axios from 'axios';

const api = axios.create({
  baseURL: 'https://v3.football.api-sports.io',
  headers: {
    'X-RapidAPI-Host': 'v3.football.api-sports.io',
    'X-RapidAPI-Key': 'SUA_API_KEY_AQUI', // Substitua com a sua API key
  },
});

export default api;
