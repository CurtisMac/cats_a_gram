import axios from "./axiosInstance";

const deleteImg = async (id) => {
    const resp = await axios.delete(`/images/${id}`);
    return resp.data;
};

export default deleteImg;