import React from 'react';

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let totalQuantity = 0;
    for (let product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.1;
    const grandTotal = shipping + tax + total;
    return (
        <div>
            <h4>Order Items: {totalQuantity}</h4>
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>GrandTotal: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;