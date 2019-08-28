import React from 'react';
import Item from './Item';

class ItemsContainer extends React.Component {
    render() {
        const { data, addToCart } = this.props;
        return (
            <div>
                {data.map((item, idx) => (
                    <Item item={item} key={idx} addtoCart={addToCart} />
                ))}
            </div>
        )
    }
}

export default ItemsContainer;