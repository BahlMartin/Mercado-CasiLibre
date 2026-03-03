import React from 'react'
import './SearchFilterTag.css'

export default function SearchFilterTag({ label, onRemove }) {
    return (
        <div className="search-filter-tag" onClick={onRemove}>
            <span className="search-filter-tag__label">{label}</span>
            <span className="search-filter-tag__close">×</span>
        </div>
    )
}
