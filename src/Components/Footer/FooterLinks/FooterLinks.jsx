import React from 'react'
import './FooterLinks.css'

export default function FooterLinks() {
    const columns = [
        {
            title: 'Acerca de',
            links: [
                { label: 'Mercado Libre', url: '#' },
                { label: 'Investor Relations', url: '#' },
                { label: 'Tendencias', url: '#' },
                { label: 'Sustentabilidad', url: '#' },
                { label: 'Blog', url: '#' }
            ]
        },
        {
            title: 'Otros sitios',
            links: [
                { label: 'Mercado Pago', url: '#' },
                { label: 'Mercado Shops', url: '#' },
                { label: 'Mercado Ads', url: '#' },
                { label: 'Envíos', url: '#' },
                { label: 'Developers', url: '#' }
            ]
        },
        {
            title: 'Ayuda',
            links: [
                { label: 'Comprar', url: '#' },
                { label: 'Vender', url: '#' },
                { label: 'Resolución de problemas', url: '#' },
                { label: 'Centro de seguridad', url: '#' }
            ]
        },
        {
            title: 'Redes sociales',
            links: [
                { label: 'X (Twitter)', url: '#' },
                { label: 'Facebook', url: '#' },
                { label: 'Instagram', url: '#' },
                { label: 'YouTube', url: '#' }
            ]
        }
    ]

    return (
        <div className="nav-footer__container">
            {columns.map((column, index) => (
                <div key={index} className="nav-footer__column">
                    <h4 className="nav-footer__title">{column.title}</h4>
                    {column.links.map((link, lIndex) => (
                        <a key={lIndex} href={link.url} className="nav-footer__link">
                            {link.label}
                        </a>
                    ))}
                </div>
            ))}
        </div>
    )
}
