import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../product/Product.js';

const Shop = () => {

    const [products, setProducts] = useState([]);

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
                    ></Product>

                    )
                }
            </div>
            <div className="cart-container">
                <h2>cart</h2>
            </div>
        </div>
    );
};

export default Shop;