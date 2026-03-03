import React from 'react'
import Rating from '../../UI/Rating/Rating'
import './SearchResultItemRating.css'

export default function SearchResultItemRating({ valoration, ratingCount, salesCount }) {
    return (
        <div className="search-result-item__rating">
            <span className="search-result-item__rating-value">{valoration.toFixed(1)}</span>
            <svg className="search-result-item__rating-star--mobile" width="12" height="12" viewBox="0 0 24 24" fill="#3483fa" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <div className="search-result-item__rating-stars--desktop">
                <Rating value={valoration} />
            </div>
            <span className="search-result-item__rating-count">({ratingCount?.toLocaleString('es-AR')})</span>
            {salesCount > 0 && (
                <span className="search-result-item__rating-sales--mobile">
                    |  {salesCount.toLocaleString('es-AR')} ventas
                </span>
            )}
        </div>
    )
}
