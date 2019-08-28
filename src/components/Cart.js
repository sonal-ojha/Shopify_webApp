import React from 'react';
import PropTypes from 'prop-types';

function Cart(props) {
    return (
        <div>
            Cart: {props.cart && props.cart.length} Items
        </div>
    );
}

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
}

export default Cart;

