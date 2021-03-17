import React from 'react';
import '../App.css';
import Cart from '../cart.jpg';

const CartButton = ({
    count, onClick
  }) => (
    <div className="cart-button">
        <button
          onClick={onClick}
        >
          <img src={Cart} className="cart" />
          {count}
        </button>
    </div>
  );

export default CartButton;