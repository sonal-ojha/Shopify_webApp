import React from 'react';
import PropTypes from 'prop-types';
import Cart from './Cart';

import './styles.css';

// Functional Component - Has No Business Logic.
// Renders output based on Props passed.
// Also, known as Dumb Component.
// *** IMP - (this.props) cannot be used in Functional/dumb component. Instead use 'props' directly
function Header(props) {
  return (
    <div className="Header">
      <div className="header_title">
        {props.title}
      </div>
      <div className="cart_container">
          <Cart cart={props.cart} />
          <button className="cart_details" onClick={props.toggleDisplayType}>
            {props.displayType === 'items' ? 'Cart Details' : 'List of Items'}
          </button>
      </div>
    </div>
  );
}

// TypeChecking for the props passed from Parent component.
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;

