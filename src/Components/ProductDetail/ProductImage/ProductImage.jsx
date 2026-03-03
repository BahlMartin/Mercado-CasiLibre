import './ProductImage.css'

export default function ProductImage({ image, title }) {
    return (
        <div className="product-image">
            <img className="product-image__img" src={image} alt={title} />
        </div>
    )
}
