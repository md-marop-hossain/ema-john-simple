import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../product/Product.js';
import Cart from '../cart/Cart';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // console.log("product api call");
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log(data)
                // console.log("product received");
            });

    }, []);


    //add handler for product.js components
    const handlerAddToCart = (product) => {
        // console.log("clicked");
        const newCart = [...cart, product];
        setCart(newCart);  //add to state

    }

    return (
        <div className="shop-container">
            <div>

            </div>
            <div className="product-container">
                <h3>Products: {products.length}</h3>
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handlerAddToCart={handlerAddToCart}
                    ></Product>
                    )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;