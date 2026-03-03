import React from 'react'
import { useNavigate } from 'react-router'
import './NavBarCategories.css'

export default function NavBarCategories() {
    const navigate = useNavigate()

    const handleCategoryClick = (category) => {
        navigate(`/search/${category}`)
    }

    const categories = [
        { id: 'Electrodomesticos', label: 'Electrodomésticos' },
        { id: 'Celulares', label: 'Celulares' },
        { id: 'Computacion', label: 'Computación' },
        { id: 'Juegos', label: 'Juegos' },
        { id: 'Moda', label: 'Moda' }
    ]

    return (
        <ul className="navbar__categories-list">
            {categories.map((cat) => (
                <li
                    key={cat.id}
                    className='navbar__text--secondary navbar__categories-item'
                    onClick={() => handleCategoryClick(cat.id)}
                >
                    {cat.label}
                </li>
            ))}
        </ul>
    )
}
