import React from 'react'
import Price from '../../UI/Price/Price'

export default function SearchResultItemPrice({ price, originalPrice, installments }) {
    return (
        <Price amount={price} originalAmount={originalPrice} installments={installments} variant="list" />
    )
}
