import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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
    
    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCard = [];
        for (const id in storedCart) {
            const adderProduct = products.find(product => product.id === id)
            if (adderProduct) {
                const quantity = storedCart[id];
                adderProduct.quantity = quantity;
                saveCard.push(adderProduct)
            }

        }
        setCard(saveCard);
    }, [products])

    const handlerAddToCard = (selectProduct) => {
        let newCard = [];
        const exists = card.find(product => product.id === selectProduct.id);
        if (!exists) {
            selectProduct.quantity = 1;
            newCard = [...card, selectProduct];
        }
        else {
            const rest = card.filter(product => product.id !== selectProduct.id);
            exists.quantity = exists.quantity + 1;
            newCard = [...rest, exists]
        }



        setCard(newCard);
        addToDb(selectProduct.id)
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