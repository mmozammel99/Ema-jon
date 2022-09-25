import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({ product, handlerAddToCard }) => {
    const { img, name, seller, price, ratings } = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-dc'>
                <h6>{name}</h6>
                <h4>Price : ${price} || {price * 103.75} <strong>৳ </strong> </h4>
                <p>Manufacturer : {seller}</p>
                <p>Ratings : {ratings}</p>
            </div>
            <button onClick={() => handlerAddToCard(product)}>Add to Cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;