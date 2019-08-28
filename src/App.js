import React from 'react';
import './App.css';
import Header from './components/Header';
import ItemsContainer from './components/ItemsContainer';
import data from './dataList';
import { addItemToCart } from './actions/addToCart.action';
import { connect } from 'react-redux';
import CartDetails from './components/CartDetails';

// Container - component : Connected to STORE
class App extends React.Component {

  state = {
    displayType: 'items',
  }

  handleAddToCart = (id) => {
    const item = data.find(item => item.id === id);
    if (item) {
      const { _addItemToCart } = this.props;
      _addItemToCart(item); // Dispatch an Action
    }
  }

  toggleDisplayType = () => {
    const { displayType } = this.state;
    if (displayType === 'items') {
      this.setState({
        displayType: 'cartItems',
      });
      return;
    }
    this.setState({
      displayType: 'items',
    });
  }

  render() {
    const { cartItems } = this.props;
    const { displayType } = this.state;
    console.log('displayType =', displayType);
    return (
      <div>
        <Header
          title="Shopify - A place to shop cool gadgets"
          cart={cartItems}
          toggleDisplayType={this.toggleDisplayType}
          displayType={displayType}
        />
        {displayType === 'items' && (
          <ItemsContainer
            data={data}
            addToCart={this.handleAddToCart}
          />
        )}
        {displayType === 'cartItems' && (
          <CartDetails
            cart={cartItems}
          />
        )}
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
