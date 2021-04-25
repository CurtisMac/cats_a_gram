import axios from "./axiosInstance";

const getVotes = async () => {
    const resp = await axios.get("/votes", { params: { limit: 1500 } });
    return resp.data;
};

export default getVotes;
