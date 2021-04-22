import axios from "./axiosInstance";

const uploadImg = async (data) => {
    const response = await axios({
        method: "post",
        url: `/images/upload`,
        headers: {
            "Content-Type": 'multipart/form-data',
        },
        data,
        onUploadProgress: function(progressEvent){
            console.log(progressEvent.loaded);
        }
    });
    return response;
};

export default uploadImg;
