import React from 'react'
import './SearchFilterList.css'

export default function SearchFilterList({ children }) {
    return (
        <ul className="search-filter-list">
            {children}
        </ul>
    )
}
