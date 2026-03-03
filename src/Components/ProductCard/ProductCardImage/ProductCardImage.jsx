import React from 'react'
import './ProductCardImage.css'

export default function ProductCardImage({ src, alt }) {
    return (
        <div className="product-card__image-container">
            <img
                className="product-card__image"
                src={src}
                alt={alt}
            />
        </div>
    )
}