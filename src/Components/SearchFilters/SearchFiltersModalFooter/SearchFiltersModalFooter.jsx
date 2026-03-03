import React from 'react'
import './SearchFiltersModalFooter.css'

export default function SearchFiltersModalFooter({ onClearAll, setIsMobileModalOpen, resultsCount }) {
    return (
        <div className="search-filters__modal-footer">
            <button className="search-filters__modal-clear" onClick={onClearAll}>
                Limpiar filtros
            </button>
            <button className="search-filters__modal-apply" onClick={() => setIsMobileModalOpen(false)}>
                Ver {resultsCount} resultados
            </button>
        </div>
    )
}
