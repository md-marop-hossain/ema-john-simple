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
            <table className="table-class">
                <tr>
                    <th><h5>Items Ordered</h5></th>
                    <th>:</th>
                    <th>{totalQuantity}</th>
                </tr>
                <tr>
                    <th><h5>Total</h5></th>
                    <th><h5>:</h5></th>
                    <th><h5>{total.toFixed(2)}</h5></th>
                </tr>
                <tr>
                    <th><h5>Shipping</h5></th>
                    <th><h5>:</h5></th>
                    <th><h5>{shipping.toFixed(2)}</h5></th>
                </tr>
                <tr>
                    <th><h5>Tax</h5></th>
                    <th><h5>:</h5></th>
                    <th><h5>{tax.toFixed(2)}</h5></th>
                </tr>
                <tr>
                    <th><h5>Grand Total</h5></th>
                    <th><h5>:</h5></th>
                    <th><h5>{grandTotal.toFixed(2)}</h5></th>
                </tr>
            </table>
        </div>
    );
};

export default Cart;