import axios from "./axiosInstance";

const saveFavourite = async (image_id) => {
    const resp = await axios.post("/favourites/", { image_id });
    return resp.data;
};

export default saveFavourite;
