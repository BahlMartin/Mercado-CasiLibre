import React from 'react'
import './ProductCardTitle.css'

export default function ProductCardTitle({ fullTitle }) {
    // separar en dos renglones si supera 24 caracteres
    let firstLine = fullTitle
    let secondLine = ''
    if (fullTitle.length > 24) {
        const sliceAt = fullTitle.slice(0, 24)
        const lastSpace = sliceAt.lastIndexOf(' ')
        const splitIndex = lastSpace > 0 ? lastSpace : 24
        firstLine = fullTitle.slice(0, splitIndex)
        secondLine = fullTitle.slice(splitIndex).trim()
    }

    return (
        <h2 className="product-card__title" title={fullTitle}>
            <span className="product-card__title--first">{firstLine}</span>
            {secondLine && (
                <span className="product-card__title--second">{secondLine}</span>
            )}
        </h2>
    )
}
