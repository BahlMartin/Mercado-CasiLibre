import React from 'react'
import './CartItemShipping.css'

export default function CartItemShipping({ freeShipping, shippingCost }) {
    return (
        <div className="cart-item-shipping">
            <span className="cart-item-shipping__label">Envío</span>
            <span className={`cart-item-shipping__value ${freeShipping ? 'cart-item-shipping__value--free' : ''}`}>
                {freeShipping ? 'Gratis' : new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(shippingCost)}
            </span>
        </div>
    )
}
