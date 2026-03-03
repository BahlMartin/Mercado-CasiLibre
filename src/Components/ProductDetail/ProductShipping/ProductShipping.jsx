import './ProductShipping.css'

export default function ProductShipping({ freeShipping, arrivesToday, shippingCost }) {
    return (
        <>
            <div className="product-shipping">
                {freeShipping && arrivesToday && (
                    <span className="product-shipping__text">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}><path d="M4 11V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2"></path><path d="M22 11v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8h20Z"></path><path d="M12 22V11"></path><path d="M4 11h16"></path><path d="M8 11v2"></path><path d="M16 11v2"></path></svg>
                        Llega gratis hoy
                    </span>
                )}
                {freeShipping && !arrivesToday && (
                    <span className="product-shipping__text">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}><path d="M4 11V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2"></path><path d="M22 11v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8h20Z"></path><path d="M12 22V11"></path><path d="M4 11h16"></path><path d="M8 11v2"></path><path d="M16 11v2"></path></svg>
                        Envío gratis a todo el país
                    </span>
                )}
                {!freeShipping && arrivesToday && (
                    <span className="product-shipping__text" style={{ color: '#333' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}><path d="M4 11V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2"></path><path d="M22 11v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8h20Z"></path><path d="M12 22V11"></path><path d="M4 11h16"></path><path d="M8 11v2"></path><path d="M16 11v2"></path></svg>
                        Llega hoy por <span style={{ fontWeight: 600 }}>$ {shippingCost.toLocaleString('es-AR')}</span>
                    </span>
                )}
            </div>
        </>
    )
}
