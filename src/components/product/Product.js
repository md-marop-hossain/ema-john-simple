import React from 'react';
import Rating from 'react-rating';
import './Product.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
    const { name, img, seller, price, stock, star } = props.product || {};
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
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
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly>

                </Rating><span id="icon-star-total"> ({star})</span> <br />
                <button onClick={() => props.handlerAddToCart(props.product)} className="btn-regular-purchase">{cartIcon} Add to cart</button>
            </div>
        </div>
    );
};

export default Product;