import axios from "./axiosInstance";

const getImages = async () => {
    const resp = await axios.get("/images", {
        params: {
            limit: 20
        }
    });
    return resp.data;
};

export default getImages;
