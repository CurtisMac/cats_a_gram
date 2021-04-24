import update from "immutability-helper";

function reducer(state, action) {
    const { img, favId } = action.payload;
    const i = state.findIndex((obj) => obj.id === img);
    switch (action.type) {
        case "set":
            return action.payload;
        case "delete":
            return update(state, {$splice: [[i, 1]] });
        case "toggleFavourite":
            return update(state, {
                [i]: { $merge: { favourite: favId } },
            });
        default:
            throw new Error();
    }
}

export default reducer;
