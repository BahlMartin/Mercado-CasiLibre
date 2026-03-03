import React from 'react'
import Price from '../../UI/Price/Price'

export default function ProductCardPrice({ price, originalPrice }) {
    return (
        <Price amount={price} originalAmount={originalPrice} variant={"card"} />
    )
}