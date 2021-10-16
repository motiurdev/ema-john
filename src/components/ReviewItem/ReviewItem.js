import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, img, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="content">
                <h3>{name}</h3>
                <h3>Price: {price}</h3>
                <h5>Quantity: {quantity}</h5>
                <button className="btn-regular" onClick={() => handleRemove(key)}>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;