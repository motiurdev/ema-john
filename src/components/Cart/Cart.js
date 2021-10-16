import React from 'react';

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    for (let product of cart) {
        total = total + product.price;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.1;
    const grandTotal = shipping + tax + total;
    return (
        <div>
            <h4>Order Items: {cart.length}</h4>
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>GrandTotal: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;