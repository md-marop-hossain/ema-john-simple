import React from 'react';
import './Cart.css';
const Cart = (props) => {
    // console.log("form cart", props.cart);
    const { cart } = props;



    // const total = cart.reduce((previous, product) => previous + product.price, 0);
    let total = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        product.quantity = !product.quantity ? 1 : product.quantity;
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }


    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h4>Order summery</h4>
            <h5>Items Ordered : {totalQuantity}</h5>
            <h5>Total         : {total.toFixed(2)} </h5>
            <h5>Shipping      : {shipping.toFixed(2)} </h5>
            <h5>Tax : {tax.toFixed(2)}</h5>
            <h5>Grand Total : {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;