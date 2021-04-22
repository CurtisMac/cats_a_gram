import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.thecatapi.com/v1",
    headers: {
        "x-api-key": "f98ebac5-23d3-42f4-af51-66c2e5f3d61c"
    },
})

export default axiosInstance;