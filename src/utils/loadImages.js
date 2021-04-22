import getImages from "../adaptors/getImages";

async function loadImages(dispatch) {
    try {
        const payload = await getImages();
        dispatch({ type: "set", payload });
    } catch (e) {
        dispatch({ type: "error" });
    }
}

export default loadImages;
