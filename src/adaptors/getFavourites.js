import axios from "./axiosInstance";

const getFavourites = async () => {
    const resp = await axios.get("/favourites", { params: { limit: 1500 } });
    return resp.data;
};

export default getFavourites;
