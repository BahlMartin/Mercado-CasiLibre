import React from 'react'
import './SearchFiltersMobileBar.css'

export default function SearchFiltersMobileBar({
    setIsMobileModalOpen,
    activeFiltersCount,
    showCategoryFilter,
    showPriceFilter,
    showShippingFilter,
    showArrivesTodayFilter
}) {
    // Generar la lista de píldoras disponibles dinámicamente
    const availablePills = [];
    if (showCategoryFilter) availablePills.push('Categorías');
    if (showPriceFilter) availablePills.push('Precio');
    if (showShippingFilter) availablePills.push('Envío gratis');
    if (showArrivesTodayFilter) availablePills.push('Llega hoy');

    // Mostrar un máximo de 2 píldoras adicionales antes del botón principal "Filtros"
    const pillsToShow = availablePills.slice(0, 2);

    return (
        <div className="search-filters__mobile-bar">
            {pillsToShow.map((pillName) => (
                // uso en vez de <> </> ,React.Fragment ya que permite agregarle la key 
                <React.Fragment key={pillName}>
                    <button className="search-filters__mobile-pill" onClick={() => setIsMobileModalOpen(true)}>
                        {pillName}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
                    </button>
                    <div className="search-filters__mobile-separator" />
                </React.Fragment>
            ))}

            <button className="search-filters__mobile-pill search-filters__mobile-pill--blue" onClick={() => setIsMobileModalOpen(true)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M1 14h6m2-6h6m2 8h6" /></svg>
                Filtros {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
            </button>
        </div>
    )
}
