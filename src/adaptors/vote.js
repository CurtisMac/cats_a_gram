import axios from "./axiosInstance";

const vote = async (dir, image_id) => {
    const value = dir === "up" ? 1 : 0;
    const resp = await axios.post("/votes/", { value, image_id });
    return resp.data;
};

export default vote;
