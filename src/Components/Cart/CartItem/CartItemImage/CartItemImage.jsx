import React from 'react'
import { Link } from 'react-router'
import './CartItemImage.css'

export default function CartItemImage({ src, alt, id }) {
    return (
        <Link to={`/product/${id}`} className="cart-item-image">
            <img src={src} alt={alt} className="cart-item-image__img" />
        </Link>
    )
}
