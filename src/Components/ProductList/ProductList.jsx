import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css'
import Carousel from '../Carousel/Carousel.jsx'



export default function ProductList({ title, products }) {

  return (
    <section className="product-list">
      <h2 className="product-list__title">
        {title}
      </h2>

      <div className="product-list__desktop">
        <Carousel>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </div>

      <div className="product-list__mobile">
        {products.slice(0, 6).map((product, index) => (
          <ProductCard key={`${product.id}-mobile-${index}`} product={product} />
        ))}
      </div>
    </section>
  )
}