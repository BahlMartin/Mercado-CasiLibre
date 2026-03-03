import React, { useState } from 'react';
import './ProductQuantity.css';

export default function ProductQuantity({ stock, quantity, setQuantity }) {

    if (stock === 1) {
        return (
            <div className="product-quantity">
                <div className="product-quantity__selector product-quantity__selector--last">
                    <span className="product-quantity__last-available">¡Último disponible!</span>
                </div>
            </div>
        );
    }

    const options = Array.from({ length: stock }, (_, i) => i + 1);

    return (
        <div className="product-quantity">
            <p className="product-quantity__title">Stock disponible</p>

            <div className="product-quantity__selector">
                <span className="product-quantity__label">Cantidad:</span>
                <div className="product-quantity__value-container">
                    <select
                        className="product-quantity__select"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                    >
                        {options.map(num => (
                            <option key={num} value={num}>
                                {num} {num === 1 ? 'unidad' : 'unidades'}
                            </option>
                        ))}
                    </select>
                    <svg className="product-quantity__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </div>
                <span className="product-quantity__available">({stock} disponibles)</span>
            </div>
        </div>
    );
}
