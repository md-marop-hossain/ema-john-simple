import React from 'react';
import './Product.css';
const Product = (props) => {
    const { name, img, seller, price, stock } = props.product || {};

    return (
        <div className="product">
            <div>
                <img src={img} alt=" "></img>
            </div>
            <div className="product-item">
                <h3 className="product-name">
                    {name}
                </h3>
                <h4 className="prodcut-h4"><small>by: {seller}</small></h4>
                <h4 className="prodcut-h4">Price: {price}</h4>
                <h4 className="prodcut-h4">
                    <small>
                        Only {stock} left in stock - order soon
                    </small>
                </h4>
                <button onClick={() => props.handlerAddToCart(props.product)} className="btn-regular-purchase">Add to cart</button>
            </div>
        </div>
    );
};

export default Product;