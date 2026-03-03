import React from 'react'
import './SummaryTotal.css'

export default function SummaryTotal({ total }) {
    return (
        <div className="summary-total">
            <span className="summary-total__label">Total</span>
            <span className="summary-total__value">$ {total.toLocaleString('es-AR')}</span>
        </div>
    )
}
