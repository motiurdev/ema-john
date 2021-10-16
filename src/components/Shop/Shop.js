import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="shop-container">
            <div className="product-container">
                <h2>Products: {products.length}</h2>
                {
                    products.map(product => console.log(product))
                }
            </div>
            <div className="cart-container">
                <h2>Cart Summary</h2>
            </div>
        </div>
    );
};

export default Shop;