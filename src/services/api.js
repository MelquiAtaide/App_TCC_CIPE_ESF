import axios from 'axios';

const api = axios.create({
    baseURL: "http://192.168.0.104:8000/api/",
    headers: {
        'Cache-Control': 'no-cache',
      },
})
export default api;