import React from 'react'
import Rating from '../../UI/Rating/Rating'
import './SearchResultItemRating.css'

export default function SearchResultItemRating({ valoration, ratingCount }) {
    return (
        <div className="search-result-item__rating">
            <span className="search-result-item__rating-value">{valoration.toFixed(1)}</span>
            <Rating value={valoration} />
            <span className="search-result-item__rating-count">({ratingCount?.toLocaleString('es-AR')})</span>
        </div>
    )
}
