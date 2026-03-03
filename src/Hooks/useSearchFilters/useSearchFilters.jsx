import { useMemo } from 'react'
import { useSearchParams } from 'react-router'

export function useSearchFilters(resultsMatchingSearch) {
    const [searchParams, setSearchParams] = useSearchParams()

    // Obtengo los filtros desde la URL
    const filters = useMemo(() => {
        const minPrice = searchParams.get('minPrice')
        const maxPrice = searchParams.get('maxPrice')

        return {
            category: searchParams.get('category') || null,
            freeShipping: searchParams.get('freeShipping') === 'true',
            arrivesToday: searchParams.get('arrivesToday') === 'true',
            priceRange: minPrice !== null ? {
                min: Number(minPrice),
                max: maxPrice !== 'null' && maxPrice !== null ? Number(maxPrice) : null
            } : null
        }
    }, [searchParams])

    // Función para actualizar la URL cuando cambia un filtro
    const handleFilterChange = (filterType, value) => {
        const newParams = new URLSearchParams(searchParams)

        if (filterType === 'category') {
            if (value) newParams.set('category', value)
            else newParams.delete('category')
        }
        else if (filterType === 'freeShipping') {
            if (value) newParams.set('freeShipping', 'true')
            else newParams.delete('freeShipping')
        }
        else if (filterType === 'arrivesToday') {
            if (value) newParams.set('arrivesToday', 'true')
            else newParams.delete('arrivesToday')
        }
        else if (filterType === 'priceRange') {
            if (value) {
                newParams.set('minPrice', value.min)
                newParams.set('maxPrice', value.max === null ? 'null' : value.max)
            } else {
                newParams.delete('minPrice')
                newParams.delete('maxPrice')
            }
        }

        setSearchParams(newParams)
    }

    const clearAllFilters = () => {
        const newParams = new URLSearchParams(searchParams)
        newParams.delete('category')
        newParams.delete('freeShipping')
        newParams.delete('arrivesToday')
        newParams.delete('minPrice')
        newParams.delete('maxPrice')
        setSearchParams(newParams)
    }

    // Aplico los filtros a los productos base
    const filteredResults = useMemo(() => {
        if (!resultsMatchingSearch) return []

        return resultsMatchingSearch.filter(product => {
            // Filtro por categoría
            if (filters.category && product.category.toLowerCase() !== filters.category.toLowerCase()) {
                return false
            }
            // Filtro por envío gratis
            if (filters.freeShipping && !product.freeShipping) {
                return false
            }
            // Filtro por llega hoy
            if (filters.arrivesToday && !product.arrivesToday) {
                return false
            }
            // Filtro por rango de precio
            if (filters.priceRange) {
                const { min, max } = filters.priceRange
                if (product.price < min) return false
                if (max !== null && product.price > max) return false
            }
            return true
        })
    }, [resultsMatchingSearch, filters])

    return {
        filters,
        handleFilterChange,
        clearAllFilters,
        filteredResults
    }
}
