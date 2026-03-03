import React from 'react'
import { Link } from 'react-router'
import './CartItemInfo.css'

export default function CartItemInfo({ name, id }) {
    return (
        <Link to={`/product/${id}`} className="cart-item-info__link">
            <h3 className="cart-item-info__name">{name}</h3>
        </Link>
    )
}
