import { Link } from 'react-router'
import './ProductCard.css'
import ProductCardTitle from './ProductCardTitle/ProductCardTitle'
import ProductCardPrice from './ProductCardPrice/ProductCardPrice'
import ProductCardShipping from './ProductCardShipping/ProductCardShipping'
import ProductCardImage from './ProductCardImage/ProductCardImage'

export default function ProductCard({ product }) {
  const fullTitle = product?.name || ''

  const {
    price,
    originalPrice,
    image,
    freeShipping,
    arrivesToday,
    id
  } = product


  return (
    <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="product-card" tabIndex={0}>

        <ProductCardImage src={image} alt={fullTitle} />

        <div className="product-card__content">
          <ProductCardTitle fullTitle={fullTitle} />

          <ProductCardPrice price={price} originalPrice={originalPrice} />

          <ProductCardShipping
            freeShipping={freeShipping}
            arrivesToday={arrivesToday}
            shippingCost={product.shippingCost}
          />
        </div>
      </div>
    </Link>
  )
}
