const addToCart = (state, action) => {
    const { payload } = action;
    // using Spread Operators
    return {
        ...state,
        items: [ ...state.items, payload ],
    }
}

export function addToCartReducer(state = { items: []}, action) {
    switch(action.type) {
        case 'REQUEST_ADD_TO_CART': return addToCart(state, action);
            //  ** Using Object.assign
            // const { payload } = action;
            // return Object.assign({}, state, { items: payload });
        default:
            return state;
    }
}