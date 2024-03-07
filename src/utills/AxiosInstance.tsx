
import axios from "axios";
const AxiosInstance = axios.create({
    "baseURL": 'https://api.matchbook.com/',
    "headers": {
        "Content-Type": "application/json",
        "timeout": 3000,
    }
});

export default AxiosInstance;