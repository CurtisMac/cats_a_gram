import getImages from "../adaptors/getImages";

async function loadImages(dispatch) {
    const payload = await getImages();
    dispatch({ type: "set", payload });
}

export default loadImages;
