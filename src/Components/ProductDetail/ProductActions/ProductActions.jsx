import React, { useContext } from 'react'
import { CartContext } from '../../../Context/CarContext'
import './ProductActions.css'

export default function ProductActions({ product, quantity }) {
    const { addToCart } = useContext(CartContext)

    return (
        <div className="product-actions">
            <button className="product-actions__btn-primary">Comprar ahora</button>
            <button
                className="product-actions__btn-secondary"
                onClick={() => addToCart(product, quantity)}
            >
                Agregar al carrito
            </button>
        </div>
    )
}
