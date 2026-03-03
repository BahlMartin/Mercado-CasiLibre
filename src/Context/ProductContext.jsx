import { createContext } from "react"
import productsData from "../data/products.js"
export const ProductContext = createContext()

export function ProductProvider({ children }) {

  const getProductsByCategory = (category) => {
    return productsData.filter(
      product => product.category.toLowerCase() === category.toLowerCase()
    )
  }

  const searchProducts = (query) => {
    return productsData.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
  }

  const getProductById = (id) => {
    return productsData.find(product => product.id === parseInt(id))
  }

  const getRecommendedProducts = (product, limit = 10) => {
    if (!product) return []
    return productsData
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, limit)
  }

  const getBestSeller = () => {
    return [...productsData].sort((a, b) => b.salesCount - a.salesCount)[0]
  }

  const getWorstSeller = () => {
    return [...productsData].sort((a, b) => a.salesCount - b.salesCount)[0]
  }

  return (
    <ProductContext.Provider
      value={{
        products: productsData,
        getProductsByCategory,
        searchProducts,
        getProductById,
        getRecommendedProducts,
        getBestSeller,
        getWorstSeller
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}