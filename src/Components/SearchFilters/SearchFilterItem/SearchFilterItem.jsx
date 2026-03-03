import React from 'react'
import './SearchFilterItem.css'

export default function SearchFilterItem({ label, onClick, isActive = false }) {
    return (
        <li
            className={`search-filter-item ${isActive ? 'search-filter-item--active' : ''}`}
            onClick={onClick}
        >
            {label}
        </li>
    )
}
