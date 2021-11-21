import axios from "axios";

const http = axios.create({
    baseURL: 'https://newsapi.org/v2',
    // baseURL: 'http://api.lawkonet.com/public/api',
});

export default http