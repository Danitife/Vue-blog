import axios from "axios";

const https = axios.create({
    // baseURL: 'https://newsapi.org/v2',
    baseURL: 'http://api.lawkonet.com/public/api',
    headers: {
        'Authorization': "Bearer " + localStorage.getItem('_token'),
        'Accept': 'application/json',
        "Content-Type": "application/json"
    }
});

export default https