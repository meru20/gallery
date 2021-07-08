import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.artic.edu/api/v1/",
    headers: {
        "Content-type": "application/json",
    }
});

export default instance;