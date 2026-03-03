import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css'
import Carousel from '../Carousel/Carousel.jsx'



export default function ProductList({title,products}) {

  return (
    <section className="product-list">
      <h2 className="product-list__title">
        {title}
      </h2>

      <Carousel>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Carousel>
    </section>
  )
}