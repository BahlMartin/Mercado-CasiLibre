import React, { useContext } from 'react'
import { CartContext } from '../../../Context/CarContext'
import CartItemImage from './CartItemImage/CartItemImage'
import CartItemInfo from './CartItemInfo/CartItemInfo'
import CartItemControls from './CartItemControls/CartItemControls'
import CartItemPrice from './CartItemPrice/CartItemPrice'
import CartItemShipping from './CartItemShipping/CartItemShipping'
import './CartItem.css'

export default function CartItem({ item }) {
    const { updateQuantity, removeFromCart } = useContext(CartContext)

    return (
        <div className="cart-item">
            <div className="cart-item__main">
                <div className="cart-item__image">
                    <CartItemImage src={item.image} alt={item.name} id={item.id} />
                </div>

                <div className="cart-item__info">
                    <CartItemInfo name={item.name} id={item.id} />
                    <CartItemControls
                        quantity={item.quantity}
                        stock={item.stock}
                        onUpdate={(amount) => updateQuantity(item.id, amount, item.stock)}
                        onRemove={() => removeFromCart(item.id)}
                    />
                </div>

                <div className="cart-item__price">
                    <CartItemPrice price={item.price * item.quantity} />
                </div>
            </div>

            <div className="cart-item__shipping">
                <CartItemShipping
                    freeShipping={item.freeShipping}
                    shippingCost={item.shippingCost}
                />
            </div>
        </div>
    )
}
