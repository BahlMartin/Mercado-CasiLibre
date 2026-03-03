import React from 'react'
import './SearchResultItemBadge.css'

export default function SearchResultItemBadge({ isBestSeller }) {
    if (!isBestSeller) return <div className="search-result-item__badge-container"></div>

    return (
        <div className="search-result-item__badge-container">
            <span className="search-result-item__badge">MÁS VENDIDO</span>
        </div>
    )
}
