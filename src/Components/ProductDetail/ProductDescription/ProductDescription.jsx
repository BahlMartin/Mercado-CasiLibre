import './ProductDescription.css'

export default function ProductDescription({ description }) {
    if (!description) return null;

    return (
        <div className="product-description">
            <h2 className="product-description__title">Descripción</h2>
            <p className="product-description__text">{description}</p>
        </div>
    )
}
