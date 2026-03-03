import './ProductGuarantees.css'

export default function ProductGuarantees() {
    return (
        <div className="product-guarantees">
            <div className="product-guarantees__item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                <p><span>Compra protegida</span>, recibí el producto o te devolvemos tu dinero</p>
            </div>
            <div className="product-guarantees__item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 1 0 2.1-5.6L2 9"></path></svg>
                <p><span>Devolución gratis por 30 días</span></p>
            </div>
        </div>
    )
}
