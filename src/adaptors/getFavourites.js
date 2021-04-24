import axios from "./axiosInstance";

const getFavourites = async () => {
    const resp = await axios.get("/favourites");
    return resp.data;
};

export default getFavourites;
