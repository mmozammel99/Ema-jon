import React from 'react';
import './Cart.css'

const Cart = ({ card }) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of card) {
        quantity = quantity + product.quantity
        total = total + product.price *product.quantity;
        shipping = shipping + product.shipping *product.quantity;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='Order-summary'>
            <h3>Order Summary</h3>
            <p>Selected Item : {quantity}</p>
            <p>Total price : $ {total} </p>
            <p>Total Shipping : $ {shipping}</p>
            <p>Tax : $ {tax}</p>
            <h5>Grand Total : $ {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;