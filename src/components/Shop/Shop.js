import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../product/Product.js';
import Cart from '../cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        // console.log("product api call");
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
                console.log(data)
                // console.log("product received");
            });

    }, []);


    //useEffect for recived local storage data
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {

                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
            console.log(storedCart);
        }

    }, [products])


    //add handler for product.js components
    const handlerAddToCart = (product) => {
        // console.log("clicked");
        const newCart = [...cart, product];
        setCart(newCart);  //add to state
        addToDb(product.key);

    }
    const handleSearch = event => {
        const searchText = event.target.value;
        // console.log(searchText);
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        // console.log(matchedProducts.length);
        setDisplayProducts(matchedProducts);


    }
    // <> empty fagment
    return (
        <>
            <div className="search-container">
                <input type="text" placeholder="Search Product"
                    onChange={handleSearch} />
            </div>
            <div className="shop-container">
                <div>

                </div>
                <div className="product-container">
                    {/* <h3>Products: {products.length}</h3> */}
                    {
                        displayProducts.map(product => <Product
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

        </>
    );
};

export default Shop;