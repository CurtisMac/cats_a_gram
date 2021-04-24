import axios from "./axiosInstance";

const getVotes = async () => {
    const resp = await axios.get("/votes");
    return resp.data;
};

export default getVotes;
