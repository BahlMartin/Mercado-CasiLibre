import React, { useContext } from 'react'
import { CartContext } from '../../../Context/CarContext'
import SummaryHeader from './SummaryHeader/SummaryHeader'
import SummaryDetails from './SummaryDetails/SummaryDetails'
import SummaryTotal from './SummaryTotal/SummaryTotal'
import SummaryActions from './SummaryActions/SummaryActions'
import './CartSummary.css'

export default function CartSummary() {
    const { cart, total, shippingTotal, clearCart } = useContext(CartContext)

    return (
        <div className="cart-summary">
            <SummaryHeader />
            <SummaryDetails cart={cart} shippingTotal={shippingTotal} />
            <div className="cart-summary__divider"></div>
            <SummaryTotal total={total + shippingTotal} />
            <SummaryActions onClear={clearCart} />
        </div>
    )
}
