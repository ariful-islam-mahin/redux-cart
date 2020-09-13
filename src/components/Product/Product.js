import React from 'react';

const Product = (props) => {
    const {addToCart, product} = props;
    return (
        <div style={{borderBottom:'1px solid gray', padding:'10px'}}>
            <h4>{product.name}</h4>
            <button onClick={() => addToCart(product.id, product.name)}>add to cart</button>
        </div>
    );
};

export default Product;