import React from 'react'
import './CartItemControls.css'

export default function CartItemControls({ quantity, stock, onUpdate, onRemove }) {
    return (
        <div className="cart-item-controls">
            <div className="cart-item-controls__selector">
                <button
                    className="cart-item-controls__btn"
                    onClick={() => onUpdate(-1)}
                    disabled={quantity <= 1}
                >
                    −
                </button>
                <span className="cart-item-controls__value">{quantity}</span>
                <button
                    className="cart-item-controls__btn"
                    onClick={() => onUpdate(1)}
                    disabled={quantity >= stock}
                >
                    +
                </button>
            </div>
            <button
                className="cart-item-controls__remove"
                onClick={onRemove}
            >
                Eliminar
            </button>
        </div>
    )
}
