import update from "immutability-helper";

function reducer(state, action) {
    switch (action.type) {
        case "set":
            return action.payload;
        case "update":
            return _update(state, action);
        case "toggleFavourite":
            const { img, favId } = action.payload;
            const i = state.findIndex((obj) => obj.id === img);
            return update(state, {
                [i]: { $merge: { favourite: favId } },
            });
        default:
            throw new Error();
    }
}


function _update(state, action){
    return state;
}

export default reducer;