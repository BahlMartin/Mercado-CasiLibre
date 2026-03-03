import React from 'react'
import './SearchFilterGroup.css'

export default function SearchFilterGroup({ title, count, children, isMain = false }) {
    return (
        <div className="search-filter-group">
            <div className="search-filter-group__header">
                {isMain ? (
                    <h3 className="search-filter-group__title search-filter-group__title--main">{title}</h3>
                ) : (
                    <h4 className="search-filter-group__title">{title}</h4>
                )}
                {count !== undefined && (
                    <span className="search-filter-group__count">{count} resultados</span>
                )}
            </div>
            <div className="search-filter-group__content">
                {children}
            </div>
        </div>
    )
}
