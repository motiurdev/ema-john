import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';


const Product = (props) => {
    const { name, img, seller, price, stock, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="content">
                <h3>{name}</h3>
                <p><small>BY {seller}</small></p>
                <h3>${price}</h3>
                <p>only {stock} left in stock - order soon</p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                ></Rating>
                <br />
                <button onClick={() => props.handleAddToCart(props.product)} className="btn-regular"> {cartIcon}Add to cart</button>
            </div>
        </div>
    );
};

export default Product;