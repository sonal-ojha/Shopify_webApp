import React from 'react';

class Item extends React.Component {
    render() {
        const { item, addtoCart } = this.props;
        return (
            <div key={item.id} className="item_container">
                <div className="item_box">
                    <img src={item.path} alt={item.name} />
                </div>
                <div className="item_name">{item.name}</div>
                <div className="item_details">
                    <button>
                        Details
                    </button>
                </div>
                <div className="item_addCart">
                    <button onClick={(e) => addtoCart(item.id)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        )
    }
}

export default Item;