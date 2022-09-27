import React from "react";

import './App.css';

const ProductCard = ({product}) => {
    return (
        <div className="product">
            <img className="product-image" src={product.imageURLs[0]} alt={product.fulhausProductName}/>
            <p className="product-name">{product.fulhausProductName}</p>
            <p> $ {product.retailPrice} {product.currency}</p>
        </div>
    )
}

export default ProductCard