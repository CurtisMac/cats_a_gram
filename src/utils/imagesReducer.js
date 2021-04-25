import update from "immutability-helper";

function reducer(state, action) {
    if (action.type === "set") {
        return action.payload;
    }
    if (action.type === "add") {
        const newImg = Object.assign(
            action.payload,
            { voteIds: [] },
            { upvotes: 0 },
            { downvotes: 0 },
            { favourite: null }
        );
        return update(state, { [newImg.id]: { $set: newImg } });
    }
    if (action.type === "delete") {
        return update(state, { $unset: [action.payload] });
    }
    if (action.type === "toggleFavourite") {
        const { img, favId } = action.payload;
        return update(state, {
            [img]: { $merge: { favourite: favId } },
        });
    }
    if (action.type === "vote") {
        const { img, dir } = action.payload;
        const prop = `${dir}votes`;
        return update(state, {
            [img]: { [prop]: { $set: state[img][prop] + 1 } },
        });
    }
}

export default reducer;
