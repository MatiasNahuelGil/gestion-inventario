import axios from 'axios';

const URL = 'https://6788616c2c874e66b7d508e1.mockapi.io/api/stockproducts';

export const axiosInstance = axios.create({
    baseURL : URL
})