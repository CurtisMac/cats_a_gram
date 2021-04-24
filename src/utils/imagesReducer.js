import update from "immutability-helper";

function reducer(state, action) {
    if (action.type === "set") {
        return action.payload;
    }
    if (action.type === "delete") {
        return update(state, {$unset: [action.payload] });
    }
    if (action.type === "toggleFavourite") {
        const { img, favId } = action.payload;
        return update(state, {
            [img]: { $merge: { favourite: favId } },
        });
    }
}

export default reducer;
