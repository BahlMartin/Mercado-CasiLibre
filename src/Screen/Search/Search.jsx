import React, { useContext, useMemo } from 'react'
import { useParams } from 'react-router'
import { ProductContext } from '../../Context/ProductContext.jsx'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import SearchFilters from '../../Components/SearchFilters/SearchFilters.jsx'
import SearchResultItem from '../../Components/SearchResultItem/SearchResultItem.jsx'
import { useSearchFilters } from '../../Hooks/useSearchFilters/useSearchFilters.jsx'
import './Search.css'

export default function Search() {
    const { element } = useParams()
    const { searchProducts, getProductsByCategory } = useContext(ProductContext)

    //  Resultados base que coinciden con el término de búsqueda de la URL
    const resultsMatchingSearch = useMemo(() => {
        if (!element) return []
        const matchesByName = searchProducts(element)
        const matchesByCategory = getProductsByCategory(element)

        const combined = [...matchesByName, ...matchesByCategory]
        return Array.from(new Set(combined.map(p => p.id)))
            .map(id => combined.find(p => p.id === id))
    }, [element, searchProducts, getProductsByCategory])

    // Uso el Custom Hook para manejar toda la lógica de filtrado y URL
    const { filters, handleFilterChange, clearAllFilters, filteredResults } = useSearchFilters(resultsMatchingSearch)

    // Identificar el producto más vendido de la lista actual para el badge
    const maxSales = useMemo(() => {
        if (filteredResults.length === 0) return 0
        return Math.max(...filteredResults.map(p => p.salesCount || 0))
    }, [filteredResults])

    return (
        <div className="search-screen">
            <NavBar />

            <main className="search-screen__container">
                <SearchFilters
                    element={element}
                    resultsCount={filteredResults.length}
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    onClearAll={clearAllFilters}
                    allProductsInSearch={filteredResults}
                    resultsMatchingSearch={resultsMatchingSearch}
                />

                {/* Lista de resultados */}
                <section className="search-screen__results-container">
                    {filteredResults.length > 0 ? (
                        <div className="search-screen__results">
                            {filteredResults.map(product => (
                                <SearchResultItem
                                    key={product.id}
                                    product={product}
                                    isBestSeller={product.salesCount > 0 && product.salesCount === maxSales}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="search-screen__empty">
                            <h3 className="search-screen__empty-title">No hay publicaciones que coincidan con tu búsqueda</h3>
                            <p className="search-screen__empty-text">Revisá la ortografía o probá con términos más generales.</p>
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    )
}
