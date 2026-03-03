import React, { useContext } from 'react'
import { Link } from 'react-router'
import { CartContext } from '../../Context/CarContext.jsx'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import CartItem from '../../Components/Cart/CartItem/CartItem.jsx'
import CartSummary from '../../Components/Cart/CartSummary/CartSummary.jsx'
import './Cart.css'

export default function Cart() {
  const { cart } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <NavBar />
        <main className="cart-container cart-container--empty">
          <div className="cart-empty">
            <h2 className="cart-empty__title">Tu carrito está vacío</h2>
            <p className="cart-empty__text">¿No sabes qué comprar? ¡Miles de productos te esperan!</p>
            <Link to="/" className="cart-empty__link">Ir al inicio</Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="cart-page">
      <NavBar />
      <main className="cart-container">
        <div className="cart-layout">
          <section className="cart-list">
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </section>

          <aside className="cart-aside">
            <CartSummary />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
