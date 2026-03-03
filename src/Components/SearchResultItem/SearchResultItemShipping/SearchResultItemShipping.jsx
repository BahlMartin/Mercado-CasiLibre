import React from 'react'
import './SearchResultItemShipping.css'

export default function SearchResultItemShipping({ freeShipping, arrivesToday, shippingCost }) {
    return (
        <div className="search-result-item__footer">
            {freeShipping && arrivesToday ? (
                <div className="search-result-item__shipping-badge search-result-item__shipping-badge--free-today">Llega gratis hoy</div>
            ) : arrivesToday ? (
                <div className="search-result-item__shipping-badge search-result-item__shipping-badge--today">
                    Llega hoy por $ {shippingCost?.toLocaleString('es-AR')}
                </div>
            ) : freeShipping ? (
                <div className="search-result-item__shipping-badge search-result-item__shipping-badge--free">Envío gratis</div>
            ) : (
                <div className="search-result-item__shipping-placeholder"></div>
            )}
        </div>
    )
}
