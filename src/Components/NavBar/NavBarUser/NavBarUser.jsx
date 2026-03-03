import React from 'react'
import './NavBarUser.css'

export default function NavBarUser() {
    return (
        <ul className="navbar__user-list">
            <li className="navbar__user-item">
                <div className="navbar__text--secondary navbar__user-avatar">P</div>
                <span className="navbar__text--secondary navbar__user-name">Pepe</span>
            </li>
            <li className="navbar__user-item">
                <span className="navbar__text--secondary navbar__user-option">Mis compras</span>
            </li>
            <li className="navbar__user-item">
                <span className="navbar__text--secondary navbar__user-option">Favoritos</span>
            </li>
        </ul>
    )
}
