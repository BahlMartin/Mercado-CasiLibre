import React from 'react'
import './Price.css'

export default function Price({ amount, originalAmount, installments, variant }) {
    const hasDiscount = originalAmount && originalAmount > amount
    const discount = hasDiscount
        ? Math.round((1 - amount / originalAmount) * 100)
        : null

    const variantMap = {
        card: 'ui-price--card',
        list: 'ui-price--list',
        detail: 'ui-price--detail'
    }
    const containerClass = variantMap[variant] || variantMap.card

    return (
        <div className={`ui-price ${containerClass}`}>
            <div className="ui-price__main">
                {hasDiscount && (
                    <span className="ui-price__original">
                        $ {originalAmount.toLocaleString('es-AR')}
                    </span>
                )}
                <div className="ui-price__row">
                    <span className="ui-price__current">
                        $ {amount.toLocaleString('es-AR')}
                    </span>
                    {hasDiscount && (
                        <span className="ui-price__discount">
                            {discount}% OFF
                        </span>
                    )}
                </div>
            </div>

            {variant === 'list' && (
                <p className="ui-price__installments">
                    {installments ? (
                        <>
                            {installments.hasNoInterest && (
                                <span className="ui-price__no-interest">Mismo precio </span>
                            )}
                            <span>
                                {installments.count} cuotas de $ {(amount / installments.count).toLocaleString('es-AR', { maximumFractionDigits: 0 })}
                            </span>
                        </>
                    ) : (
                        <span className="ui-price__placeholder">&nbsp;</span>
                    )}
                </p>
            )}

            {variant === 'detail' && installments && (
                <p className="ui-price__installments">
                    {installments.hasNoInterest && (
                        <span className="ui-price__no-interest">Mismo precio </span>
                    )}
                    <span>
                        {installments.count} cuotas de $ {(amount / installments.count).toLocaleString('es-AR', { maximumFractionDigits: 0 })}
                    </span>
                </p>
            )}
        </div>
    )
}
