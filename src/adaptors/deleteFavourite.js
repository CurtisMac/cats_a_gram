import axios from "./axiosInstance";

const deleteFavourite = async (id) => {
    const resp = await axios.delete(`/favourites/${id}`);
    return resp.data;
};

export default deleteFavourite;