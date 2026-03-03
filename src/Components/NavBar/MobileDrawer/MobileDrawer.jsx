import React from 'react'
import { useNavigate } from 'react-router'
import { IoCloseOutline } from 'react-icons/io5'
import './MobileDrawer.css'

const CATEGORIES = [
    { id: 'Electrodomesticos', label: 'Electrodomésticos' },
    { id: 'Celulares', label: 'Celulares' },
    { id: 'Computacion', label: 'Computación' },
    { id: 'Juegos', label: 'Juegos' },
    { id: 'Moda', label: 'Moda' }
]

export default function MobileDrawer({ isOpen, onClose }) {
    const navigate = useNavigate()

    const handleCategoryClick = (categoryId) => {
        navigate(`/search/${categoryId}`)
        onClose()
    }

    return (
        <>
            {/* Overlay oscuro detrás del drawer */}
            <div
                className={`mobile-drawer__overlay ${isOpen ? 'mobile-drawer__overlay--visible' : ''}`}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Panel lateral */}
            <aside className={`mobile-drawer ${isOpen ? 'mobile-drawer--open' : ''}`} aria-label="Menú de navegación">

                {/* Encabezado del drawer: avatar + nombre */}
                <div className="mobile-drawer__header">
                    <div className="mobile-drawer__avatar">P</div>
                    <span className="mobile-drawer__username">Pepe</span>
                    <button className="mobile-drawer__close" onClick={onClose} aria-label="Cerrar menú">
                        <IoCloseOutline size={24} />
                    </button>
                </div>

                {/* Categorías */}
                <nav className="mobile-drawer__nav">
                    <p className="mobile-drawer__section-title">Categorías</p>
                    <ul className="mobile-drawer__list">
                        {CATEGORIES.map((cat) => (
                            <li key={cat.id} className="mobile-drawer__item" onClick={() => handleCategoryClick(cat.id)}>
                                {cat.label}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Links de usuario */}
                <div className="mobile-drawer__user-links">
                    <p className="mobile-drawer__section-title">Mi cuenta</p>
                    <ul className="mobile-drawer__list">
                        <li className="mobile-drawer__item">Mis compras</li>
                        <li className="mobile-drawer__item">Favoritos</li>
                    </ul>
                </div>
            </aside>
        </>
    )
}
