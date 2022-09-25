import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [card, setCard] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handlerAddToCard = (product) => {
        const newCard = [...card, product];
        setCard(newCard);
        addToDb(product.id)
    }

    return (
        <div className='Shop-Container'>
            <div >
                <h3 className='total'>Total Result : {products.length}</h3>
                <div className='Order-Card-Container'>
                    {
                        products.map(pro => <Product
                            key={pro.id}
                            product={pro}
                            handlerAddToCard={handlerAddToCard}

                        ></Product>)
                    }
                </div>
            </div>
            <div className='cd'>
                <Cart card={card}></Cart>
            </div>

        </div>
    );
};

export default Shop;