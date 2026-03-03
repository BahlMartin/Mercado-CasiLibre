import React from 'react'
import { Link } from 'react-router'
import SearchResultItemBadge from './SearchResultItemBadge/SearchResultItemBadge.jsx'
import SearchResultItemRating from './SearchResultItemRating/SearchResultItemRating.jsx'
import SearchResultItemPrice from './SearchResultItemPrice/SearchResultItemPrice.jsx'
import SearchResultItemShipping from './SearchResultItemShipping/SearchResultItemShipping.jsx'
import './SearchResultItem.css'

export default function SearchResultItem({ product, isBestSeller }) {
    const { id, name, price, image, freeShipping, arrivesToday, valoration, ratingCount, originalPrice, installments } = product

    return (
        <Link to={`/product/${id}`} className="search-result-item">
            <div className="search-result-item__image-container">
                <img src={image} alt={name} className="search-result-item__image" />
            </div>

            <div className="search-result-item__content">
                <div className="search-result-item__info-top">
                    <SearchResultItemBadge isBestSeller={isBestSeller} />
                    <h2 className="search-result-item__title">{name}</h2>
                    <SearchResultItemRating valoration={valoration} ratingCount={ratingCount} />
                </div>

                <SearchResultItemPrice
                    price={price}
                    originalPrice={originalPrice}
                    installments={installments}
                />

                <SearchResultItemShipping
                    freeShipping={freeShipping}
                    arrivesToday={arrivesToday}
                    shippingCost={product.shippingCost}
                />
            </div>
        </Link>
    )
}
