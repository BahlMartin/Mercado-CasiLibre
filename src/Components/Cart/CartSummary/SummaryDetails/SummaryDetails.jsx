import React from 'react'
import './SummaryDetails.css'

export default function SummaryDetails({ cart, shippingTotal }) {
    return (
        <div className="summary-details">
            {cart.map(item => (
                <div key={item.id} className="summary-details__row">
                    <span className="summary-details__name">{item.name}</span>
                    <span className="summary-details__price">
                        $ {(item.price * item.quantity).toLocaleString('es-AR')}
                    </span>
                </div>
            ))}
            {shippingTotal > 0 && (
                <div className="summary-details__row">
                    <span className="summary-details__name">Envío</span>
                    <span className="summary-details__price">
                        $ {shippingTotal.toLocaleString('es-AR')}
                    </span>
                </div>
            )}
        </div>
    )
}
