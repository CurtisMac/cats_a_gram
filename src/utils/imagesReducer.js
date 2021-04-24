import update from "immutability-helper";

function reducer(state, action) {
    if (action.type === "set") {
        return action.payload;
    }
    if (action.type === "delete") {
        const { img } = action.payload;
        const i = state.findIndex((obj) => obj.id === img);
        return update(state, {$splice: [[i, 1]] });
    }
    if (action.type === "toggleFavourite") {
        const { img, favId } = action.payload;
        const i = state.findIndex((obj) => obj.id === img);
        return update(state, {
            [i]: { $merge: { favourite: favId } },
        });
    }
}

export default reducer;
