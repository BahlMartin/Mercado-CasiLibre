import { createContext, useState } from "react"

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id)

      if (exists) {
        const newQuantity = exists.quantity + quantity
        // Validación de stock
        if (newQuantity > (product.stock)) return prev

        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: newQuantity }
            : item
        )
      }

      return [...prev, { ...product, quantity }]
    })
  }

  const updateQuantity = (id, amount, stock) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + amount
        if (newQuantity >= 1 && newQuantity <= (stock)) {
          return { ...item, quantity: newQuantity }
        }
      }
      return item
    }))
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const itemCount = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  )

  const shippingTotal = cart.reduce(
    (acc, item) => {
      if (!item.freeShipping) {
        return acc + (item.shippingCost || 0)
      }
      return acc
    },
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        total,
        shippingTotal,
        itemCount
      }}
    >
      {children}
    </CartContext.Provider>
  )
}