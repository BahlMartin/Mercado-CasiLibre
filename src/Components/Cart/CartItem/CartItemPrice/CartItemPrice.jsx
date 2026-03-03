import React from 'react'
import './CartItemPrice.css'

export default function CartItemPrice({ price }) {
    return (
        <div className="cart-item-price">
            <span className="cart-item-price__amount">$ {price.toLocaleString('es-AR')}</span>
        </div>
    )
}
