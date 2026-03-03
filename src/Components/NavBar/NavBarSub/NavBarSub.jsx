import React from 'react'
import { FiMapPin } from "react-icons/fi"
import NavBarCategories from '../NavBarCategories/NavBarCategories'
import NavBarUser from '../NavBarUser/NavBarUser'
import './NavBarSub.css'

export default function NavBarSub() {
    return (
        <div className="navbar__subbar">
            <div className="navbar__location">
                <div className='navbar__location--icon'>
                    <FiMapPin size={18} />
                </div>
                <div className='navbar__location-container'>
                    <span className='navbar__text--tertiary'>Enviar a Pepe</span>
                    <span className='navbar__text--secondary'>Av. Siempre Viva 123</span>
                </div>
            </div>

            <nav className="navbar__categories">
                <NavBarCategories />
            </nav>

            <nav className="navbar__user">
                <NavBarUser />
            </nav>
        </div>
    )
}