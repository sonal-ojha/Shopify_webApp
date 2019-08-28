import React from 'react';

class CartDetails extends React.Component {
    render () {
        const { cart } = this.props;
        return (
            <div style={{ padding: '20px'}}>
                Selected Cart Items
                <br />
                {cart && cart.map((item, idx) => (
                    <div className="cartItemDetails">
                        <div className="sq_no">{idx + 1}</div>
                        <div className="item_box">
                            <img src={item.path} alt={item.name} />
                        </div>
                        <div className="item_name">{item.name}</div>
                    </div>
                ))}
            </div>
        )
    }
}

export default CartDetails;