import './ProductInfo.css'
import Rating from '../../UI/Rating/Rating'
import Price from '../../UI/Price/Price'

export default function ProductInfo({ product }) {
    const rating = product.valoration;

    return (
        <>
            <div className="product-info__subtitle">
                Nuevo · {product.salesCount?.toLocaleString('es-AR')} vendidos
            </div>
            <h1 className="product-info__title">{product.name}</h1>

            <div className="product-info__rating">
                <span className="product-info__rating-number">{rating}</span>
                <Rating value={rating} />
                <span className="product-info__rating-reviews">({product.ratingCount?.toLocaleString('es-AR')})</span>
            </div>

            <div className="product-info__price-container">
                <Price
                    amount={product.price}
                    originalAmount={product.originalPrice}
                    installments={product.installments}
                    variant="detail"
                />
            </div>
        </>
    )
}
