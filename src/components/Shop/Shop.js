import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [searchFilter, setSearchFilter] = useState([])

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSearchFilter(data)
            })
    }, [])

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart()
            const storedCart = []
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key)
                if (addedProduct) {
                    const quantity = savedCart[key]
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct)
                }
            }
            setCart(storedCart)
        }
    }, [products])

    // get product object
    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.key)
    }

    const handleSearch = (e) => {
        const searchText = e.target.value
        const matchSearch = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))

        setSearchFilter(matchSearch)

    }

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search Product"
                    onChange={handleSearch}
                />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    <h2>Products: {products.length}</h2>
                    {
                        searchFilter.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <h2>Cart Summary</h2>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;