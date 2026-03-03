import React from 'react'
import './SearchFiltersActiveTags.css'
import SearchFilterTag from '../SearchFilterTag/SearchFilterTag.jsx'

export default function SearchFiltersActiveTags({ filters, onFilterChange }) {
    if (!filters.category && !filters.freeShipping && !filters.arrivesToday && !filters.priceRange) {
        return null;
    }

    return (
        <div className="search-filters__active-container">
            {filters.category && (
                <SearchFilterTag
                    label={filters.category.charAt(0).toUpperCase() + filters.category.slice(1)}
                    onRemove={() => onFilterChange('category', null)}
                />
            )}
            {filters.freeShipping && (
                <SearchFilterTag
                    label="Envío gratis"
                    onRemove={() => onFilterChange('freeShipping', false)}
                />
            )}
            {filters.arrivesToday && (
                <SearchFilterTag
                    label="Llega hoy"
                    onRemove={() => onFilterChange('arrivesToday', false)}
                />
            )}
            {filters.priceRange && (
                <SearchFilterTag
                    label={
                        filters.priceRange.max === null
                            ? `Más de $${filters.priceRange.min.toLocaleString()}`
                            : filters.priceRange.min === 0
                                ? `Hasta $${filters.priceRange.max.toLocaleString()}`
                                : `$${filters.priceRange.min.toLocaleString()} a $${filters.priceRange.max.toLocaleString()}`
                    }
                    onRemove={() => onFilterChange('priceRange', null)}
                />
            )}
        </div>
    )
}
