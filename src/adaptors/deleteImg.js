import axios from "./axiosInstance";

const deleteImg = async (img) => {
    const promises = [];
    //delete imgage
    promises.push(axios.delete(`/images/${img.id}`));

    //delete favourite record
    if(img.favourite){
        promises.push(axios.delete(`/favourites/${img.favourite}`));
    }

    //delete votes
    img.voteIds.forEach(id => {
        promises.push(axios.delete(`/votes/${id}`))
    })

    await Promise.all(promises)
    return "success";
};

export default deleteImg;