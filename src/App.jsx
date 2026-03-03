import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './Screen/Home/Home.jsx'
import ProductDetail from './Screen/ProductDetail/ProductDetail.jsx'
import Cart from './Screen/Cart/Cart.jsx'
import { ProductProvider } from './Context/ProductContext.jsx'
import { CartProvider } from './Context/CarContext.jsx'
import { ChatProvider } from './Context/Chatcontext.jsx'
import Search from './Screen/Search/Search.jsx'
import Chatbot from './Components/Chatbot/Chatbot.jsx'

function App() {

  return (
    <ProductProvider>
      <CartProvider>
        <ChatProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/search/:element' element={<Search />} />
          </Routes>
          <Chatbot />
        </ChatProvider>
      </CartProvider>
    </ProductProvider>
  )
}

export default App
