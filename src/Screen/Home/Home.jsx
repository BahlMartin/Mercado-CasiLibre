import React, { useContext, useMemo } from 'react'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import ProductList from '../../Components/ProductList/ProductList.jsx'
import './Home.css'
import { ProductContext } from "../../Context/ProductContext.jsx"
import Footer from '../../Components/Footer/Footer.jsx'

export default function Home() {
  const { products, getProductsByCategory } = useContext(ProductContext)

  // obtengo las categorias que hay en el dataset de productos
  const categories = useMemo(() => {
    return [...new Set(products.map(product => product.category))]
  }, [products])


  return (
    <div className="home">
      <NavBar />
      {categories.map(category => (
        <ProductList
          key={category}
          title={category}
          products={getProductsByCategory(category)}
        />
      ))}
      <Footer />
    </div>
  )
}
