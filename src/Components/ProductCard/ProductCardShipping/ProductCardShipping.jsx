import React from 'react'
import Badge from '../../UI/Badge/Badge'
import './ProductCardShipping.css'

export default function ProductCardShipping({ freeShipping, arrivesToday }) {
    if (!freeShipping && !arrivesToday) return <div className="product-card__shipping-row" style={{ height: '18px' }} />

    return (
        <div className="product-card__shipping-row">
            {freeShipping && arrivesToday && (
                <Badge text="Llega gratis hoy" variant="filled" />
            )}
            {freeShipping && !arrivesToday && (
                <Badge text="Envío gratis" />
            )}
            {!freeShipping && arrivesToday && (
                <Badge text="Llega hoy" />
            )}
        </div>
    )
}