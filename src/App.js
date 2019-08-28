import React from 'react';
import './App.css';
import Header from './components/Header';
import ItemsContainer from './components/ItemsContainer';
import data from './dataList';
import { addItemToCart } from './actions/addToCart.action';
import { connect } from 'react-redux';

// Container - component : Connected to STORE
class App extends React.Component {

  handleAddToCart = (id) => {
    const item = data.find(item => item.id === id);
    if (item) {
      const { _addItemToCart } = this.props;
      _addItemToCart(item); // Dispatch an Action
    }
  }

  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <Header
          title="Shopify - A place to shop cool gadgets"
          cart={cartItems}
        />
        <ItemsContainer
          data={data}
          addToCart={this.handleAddToCart}
        />
      </div>
    );
  }
}

// Get store to the Componemt
const mapStoreToProps = (store) => ({
  cartItems: store.cart.items,
});

// To dispatch Specific Action written in action.js File
const mapDispatchToProps = (dispatch) => ({
  _addItemToCart: (item) => {
    dispatch(addItemToCart(item))
  },
});

// connect: Used to connect STORE to the component.
// Hence, Dispatch and store is availabe in component)
export default connect(mapStoreToProps, mapDispatchToProps)(App);
