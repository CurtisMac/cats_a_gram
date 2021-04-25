import axios from "axios";
const apiKey = process.env.REACT_APP_CAT_API_KEY;
const axiosInstance = axios.create({
    baseURL: "https://api.thecatapi.com/v1",
    headers: {
        "x-api-key": apiKey,
    },
});

export default axiosInstance;
