import React, { useContext } from 'react'
import { Link } from 'react-router'
import SearchBar from '../../SearchBar/SearchBar'
import { IoChatbubbleOutline, IoCartOutline } from "react-icons/io5"
import { CartContext } from '../../../Context/CarContext'
import { useChat } from '../../../Context/Chatcontext'
import './NavBarTop.css'

export default function NavBarTop() {
    const { itemCount } = useContext(CartContext)
    const { toggleChat } = useChat()

    return (
        <div className="navbar__topbar">
            <Link to="/" className="navbar__logo">Mercado CasiLibre</Link>

            <div className="navbar__search">
                <SearchBar />
            </div>

            <div className="navbar__icons">
                <div className="navbar__icon" onClick={toggleChat} style={{ cursor: 'pointer' }}>
                    <IoChatbubbleOutline size={24} />
                    <span>Chat</span>
                </div>
                <Link to="/cart" className="navbar__icon navbar__icon--cart">
                    <div className="navbar__cart-icon-wrapper">
                        <IoCartOutline size={24} />
                        {itemCount > 0 && <span className="navbar__cart-count">{itemCount}</span>}
                    </div>
                    <span>Carrito</span>
                </Link>
            </div>
        </div>
    )
}
