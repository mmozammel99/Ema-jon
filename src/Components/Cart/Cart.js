import React from 'react';
import './Cart.css'

const Cart = (card) => {
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Selected Item : {card.length}</p>
        </div>
    );
};

export default Cart;