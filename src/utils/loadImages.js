import getImages from "../adaptors/getImages";
import getVotes from "../adaptors/getVotes";
import getFavourites from "../adaptors/getFavourites";

async function loadImageData() {
    const [images, votes, favourites] = await Promise.all([
        getImages(),
        getVotes(),
        getFavourites(),
    ]);
    const payload = _getHash(images);
    _addVotes(payload, votes);
    _addFavourites(payload, favourites);
    return payload;
}

function _getHash(array) {
    const hash = {};
    array.forEach((obj) => {
        hash[obj.id] = Object.assign(
            {},
            obj,
            { voteIds: [] },
            { upvotes: 0 },
            { downvotes: 0 },
            { favourite: null }
        );
    });
    return hash;
}

function _addVotes(payload, votes) {
    votes.forEach((v) => {
        const imgObj = payload[v.image_id];
        if (imgObj) {
            //1 is upvote & 0 is downvote
            let voteType = v.value ? "upvotes" : "downvotes";
            imgObj[voteType]++;
            //store ids so they can be deleted with the image
            imgObj.voteIds.push(v.id);
        }
    });
}

function _addFavourites(payload, favourites) {
    favourites.forEach((f) => {
        const imgObj = payload[f.image_id];
        if (imgObj) {
            imgObj.favourite = f.id;
        }
    });
}

export default loadImageData;
