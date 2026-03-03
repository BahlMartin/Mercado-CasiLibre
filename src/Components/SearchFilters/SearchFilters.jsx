import React, { useMemo, useState, useEffect } from 'react'
import SearchFilterTag from './SearchFilterTag/SearchFilterTag.jsx'
import SearchFilterGroup from './SearchFilterGroup/SearchFilterGroup.jsx'
import SearchFilterList from './SearchFilterList/SearchFilterList.jsx'
import SearchFilterItem from './SearchFilterItem/SearchFilterItem.jsx'
import SearchFiltersMobileBar from './SearchFiltersMobileBar/SearchFiltersMobileBar.jsx'
import SearchFiltersActiveTags from './SearchFiltersActiveTags/SearchFiltersActiveTags.jsx'
import SearchFiltersModalFooter from './SearchFiltersModalFooter/SearchFiltersModalFooter.jsx'
import './SearchFilters.css'

export default function SearchFilters({ element, resultsCount, filters = {}, onFilterChange, onClearAll, allProductsInSearch, resultsMatchingSearch }) {
    const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

    useEffect(() => {
        if (isMobileModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isMobileModalOpen]);

    // Categorías disponibles basadas solo en los productos que coinciden con la búsqueda (base)
    const availableCategories = useMemo(() => {
        if (!resultsMatchingSearch) return []
        const categories = resultsMatchingSearch.map(p => p.category)
        return [...new Set(categories)]
    }, [resultsMatchingSearch])

    // Calcular rangos de precio dinámicos basados en los productos ACTUALES (filtrados)
    const priceRanges = useMemo(() => {
        if (!allProductsInSearch || allProductsInSearch.length < 2 || filters.priceRange) return []

        const prices = allProductsInSearch.map(p => p.price).sort((a, b) => a - b)
        const min = prices[0]
        const max = prices[prices.length - 1]
        const range = max - min

        if (range <= 10) return []

        return [
            { label: `Hasta $${Math.floor(min + range / 3).toLocaleString()}`, min: 0, max: Math.floor(min + range / 3) },
            { label: `$${Math.floor(min + range / 3).toLocaleString()} a $${Math.floor(min + (range * 2) / 3).toLocaleString()}`, min: Math.floor(min + range / 3), max: Math.floor(min + (range * 2) / 3) },
            { label: `Más de $${Math.floor(min + (range * 2) / 3).toLocaleString()}`, min: Math.floor(min + (range * 2) / 3), max: null }
        ]
    }, [allProductsInSearch, filters.priceRange])

    // Verificar si existen opciones de envío/llegada hoy en los resultados actuales para mostrar o no el filtro
    const hasShippingOptions = useMemo(() => {
        if (!allProductsInSearch || filters.freeShipping) return false
        return allProductsInSearch.some(p => p.freeShipping === true) && allProductsInSearch.some(p => p.freeShipping === false)
    }, [allProductsInSearch, filters.freeShipping])

    const hasArrivesTodayOptions = useMemo(() => {
        if (!allProductsInSearch || filters.arrivesToday) return false
        return allProductsInSearch.some(p => p.arrivesToday === true) && allProductsInSearch.some(p => p.arrivesToday === false)
    }, [allProductsInSearch, filters.arrivesToday])

    const activeFiltersCount = (filters.category ? 1 : 0) + (filters.freeShipping ? 1 : 0) + (filters.arrivesToday ? 1 : 0) + (filters.priceRange ? 1 : 0);

    return (
        <aside className="search-filters">
            {/* Componente superior horizontal en móbiles */}
            <SearchFiltersMobileBar
                setIsMobileModalOpen={setIsMobileModalOpen}
                activeFiltersCount={activeFiltersCount}
                showCategoryFilter={!filters.category && availableCategories.length > 1}
                showPriceFilter={priceRanges.length > 0}
                showShippingFilter={hasShippingOptions}
                showArrivesTodayFilter={hasArrivesTodayOptions}
            />

            {/* Contenedor principal de filtros que se volverá Modal en mobile */}
            <div className={`search-filters__wrapper ${isMobileModalOpen ? 'search-filters__wrapper--open' : ''}`}>
                {/* Header del modal mobile */}
                <div className="search-filters__modal-header">
                    <span className="search-filters__modal-title">Filtros</span>
                    <button className="search-filters__modal-close" onClick={() => setIsMobileModalOpen(false)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
                    </button>
                </div>

                <div className="search-filters__scrollable-content">
                    {/* Sección de Cabecera y Filtros Activos */}
                    <SearchFilterGroup title={element} count={resultsCount} isMain={true}>
                        <SearchFiltersActiveTags
                            filters={filters}
                            onFilterChange={onFilterChange}
                        />
                    </SearchFilterGroup>

                    {/* Filtro de Categoría */}
                    {!filters.category && availableCategories.length > 1 && (
                        <SearchFilterGroup title="Categorías">
                            <SearchFilterList>
                                {availableCategories.map(cat => (
                                    <SearchFilterItem
                                        key={cat}
                                        label={cat.charAt(0).toUpperCase() + cat.slice(1)}
                                        onClick={() => onFilterChange('category', cat)}
                                    />
                                ))}
                            </SearchFilterList>
                        </SearchFilterGroup>
                    )}

                    {/* Filtros de Envío */}
                    {hasShippingOptions && (
                        <SearchFilterGroup title="Costo de envío">
                            <SearchFilterList>
                                <SearchFilterItem
                                    label="Envío gratis"
                                    onClick={() => onFilterChange('freeShipping', true)}
                                />
                            </SearchFilterList>
                        </SearchFilterGroup>
                    )}

                    {/* Filtros de Entrega */}
                    {hasArrivesTodayOptions && (
                        <SearchFilterGroup title="Entrega">
                            <SearchFilterList>
                                <SearchFilterItem
                                    label="Llega hoy"
                                    onClick={() => onFilterChange('arrivesToday', true)}
                                />
                            </SearchFilterList>
                        </SearchFilterGroup>
                    )}

                    {/* Filtros de Precio */}
                    {priceRanges.length > 0 && (
                        <SearchFilterGroup title="Precio">
                            <SearchFilterList>
                                {priceRanges.map((range, index) => (
                                    <SearchFilterItem
                                        key={index}
                                        label={range.label}
                                        onClick={() => onFilterChange('priceRange', { min: range.min, max: range.max })}
                                    />
                                ))}
                            </SearchFilterList>
                        </SearchFilterGroup>
                    )}
                </div>

                {/* Footer sticky del modal mobile */}
                <SearchFiltersModalFooter
                    onClearAll={onClearAll}
                    setIsMobileModalOpen={setIsMobileModalOpen}
                    resultsCount={resultsCount}
                />
            </div>
        </aside>
    )
}
