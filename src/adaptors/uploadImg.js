import axios from "./axiosInstance";

const uploadImg = async (data, setProgress) => {
    const response = await axios({
        method: "post",
        url: `/images/upload`,
        headers: {
            "Content-Type": "multipart/form-data",
        },
        data,
        onUploadProgress: function (progressEvent) {
            setProgress(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
            );
        },
    });
    return response;
};

export default uploadImg;
