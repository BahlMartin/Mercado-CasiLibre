import React, { useContext, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router'
import { ProductContext } from '../../Context/ProductContext.jsx'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import ProductImage from '../../Components/ProductDetail/ProductImage/ProductImage.jsx'
import ProductInfo from '../../Components/ProductDetail/ProductInfo/ProductInfo.jsx'
import ProductShipping from '../../Components/ProductDetail/ProductShipping/ProductShipping.jsx'
import ProductQuantity from '../../Components/ProductDetail/ProductQuantity/ProductQuantity.jsx'
import ProductActions from '../../Components/ProductDetail/ProductActions/ProductActions.jsx'
import ProductGuarantees from '../../Components/ProductDetail/ProductGuarantees/ProductGuarantees.jsx'
import ProductDescription from '../../Components/ProductDetail/ProductDescription/ProductDescription.jsx'

import './ProductDetail.css'
import ProductList from '../../Components/ProductList/ProductList.jsx'

export default function ProductDetail() {
  const { id } = useParams()
  const { products, getRecommendedProducts, getProductById } = useContext(ProductContext)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  const [quantity, setQuantity] = React.useState(1)

  const product = getProductById(id)
  const recommendedProducts = getRecommendedProducts(product)

  if (!product) {
    return (
      <>
        <NavBar />
        <div className="product-detail__error">
          <h2>Producto no encontrado</h2>
          <Link to="/">Volver al inicio</Link>
        </div>
        <Footer />
      </>
    )
  }

  const hasDiscount = product.price < product.originalPrice;
  const discount = hasDiscount
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <>
      <NavBar />
      <div className="product-detail">
        <div className="product-detail__nav">
          <button className="product-detail__btn-back" onClick={() => navigate(-1)}>
            Volver
          </button>
          <span className="product-detail__nav-separator">|</span>
          <Link autoFocus to={`/search/${product.category}`} className="product-detail__nav-link">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
        </div>

        <div className="product-detail__card">
          <div className="product-detail__card-inner">

            <div className="product-detail__desktop-row">

              <ProductImage image={product.image} title={product.name} />

              <div className="product-detail__right">

                <ProductInfo product={product} hasDiscount={hasDiscount} discount={discount} />

                <ProductShipping
                  freeShipping={product.freeShipping}
                  arrivesToday={product.arrivesToday}
                  shippingCost={product.shippingCost}
                  stock={product.stock}
                />

                <ProductQuantity stock={product.stock} quantity={quantity} setQuantity={setQuantity} />

                <ProductActions product={product} quantity={quantity} />

                <ProductGuarantees />

              </div>
            </div>

            <div className="product-detail__recommendations">
              <ProductList title="Productos recomendados" products={recommendedProducts} />
            </div>

            <ProductDescription description={product.description} />

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
