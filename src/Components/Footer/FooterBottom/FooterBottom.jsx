import React from 'react'
import './FooterBottom.css'

export default function FooterBottom() {
    return (
        <div className="nav-footer__bottom">
            <div className="nav-footer__bottom-container">
                <div className="nav-footer__legal-links">
                    <a href="#">Trabajá con nosotros</a>
                    <a href="#">Términos y condiciones</a>
                    <a href="#">Cómo cuidamos tu privacidad</a>
                    <a href="#">Accesibilidad</a>
                    <a href="#">Información al usuario financiero</a>
                    <a href="#">Ayuda</a>
                    <a href="#">Defensa del Consumidor</a>
                </div>
                <p className="nav-footer__copyright">
                    Copyright © 1999-{new Date().getFullYear()} MercadoLibre S.R.L.
                </p>
                <p className="nav-footer__address">
                    Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA
                </p>
            </div>
        </div>
    )
}
