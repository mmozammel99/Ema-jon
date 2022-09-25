import React from 'react';
import './Cart.css'

const Cart = ({card}) => {
    console.log(card);
    let total = 0;
    let shipping = 0;

    for(const product of card){
        total = total +product.price;
        shipping = shipping +product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='Order-summary'>
            <h3>Order Summary</h3>
            <p>Selected Item : {card.length}</p>
            <p>Total price : $ {total} </p>
            <p>Total Shipping : $ {shipping}</p>
            <p>Tax : $ {tax}</p>
            <h5>Grand Total : $ {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;