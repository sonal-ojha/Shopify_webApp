// Action: that tells What needs to be changed in Store
// TYPE: Mandatory key - used to locate which reducer case to enter in.
function requestAddToCart(item) {
    return {
        type: 'REQUEST_ADD_TO_CART',
        payload: item,
    }
}

// Action Creator: This is used to trigger action
export const addItemToCart = (item) => {
    return (dispatch => {
        dispatch(requestAddToCart(item));
    })
};