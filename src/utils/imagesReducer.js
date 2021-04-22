function reducer(state, action) {
    switch (action.type) {
        case "set":
            return action.payload;
        case "update":
            return _update(state, action);
        case "error":
            console.log("an error occured")
            return;
        default:
            throw new Error();
    }
}


function _update(state, action){
    return state;
}

export default reducer;