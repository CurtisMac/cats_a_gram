import update from "immutability-helper";

function reducer(state, { type, payload }) {
    if (type === "set") {
        return payload;
    }
    if (type === "add") {
        const newImg = Object.assign(
            payload,
            { voteIds: [] },
            { upvotes: 0 },
            { downvotes: 0 },
            { favourite: null }
        );
        return update(state, { [newImg.id]: { $set: newImg } });
    }
    if (type === "delete") {
        return update(state, { $unset: [payload] });
    }
    if (type === "toggleFavourite") {
        const { img, favId } = payload;
        return update(state, {
            [img]: { $merge: { favourite: favId } },
        });
    }
    if (type === "vote") {
        const { img, dir } = payload;
        const prop = `${dir}votes`;
        return update(state, {
            [img]: { [prop]: { $set: state[img][prop] + 1 } },
        });
    }
}

export default reducer;
