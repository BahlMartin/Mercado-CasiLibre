import React from 'react'
import './SummaryActions.css'

export default function SummaryActions({ onCheckout, onClear }) {
    return (
        <div className="summary-actions">
            <button className="summary-actions__button summary-actions__button--checkout" onClick={onCheckout}>
                Continuar compra
            </button>

            <button className="summary-actions__button summary-actions__button--clear" onClick={onClear}>
                Vaciar carrito
            </button>
        </div>
    )
}
