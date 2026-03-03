import React from 'react'
import './Rating.css';

export default function Rating({ value, size = 14 }) {
    const defaultRating = value;

    const decimalPart = defaultRating % 1;
    let fullStars = Math.floor(defaultRating);
    let hasHalfStar = false;

    if (decimalPart > 0.5) {
        fullStars += 1;
    } else if (decimalPart > 0) {
        hasHalfStar = true;
    }

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                // Estrella llena
                stars.push(
                    <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="#3483fa" stroke="#3483fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                );
            } else if (i === fullStars + 1 && hasHalfStar) {
                // Media estrella
                stars.push(
                    <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="url(#half-star)" stroke="#3483fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <defs>
                            <linearGradient id="half-star">
                                <stop offset="50%" stopColor="#3483fa" />
                                <stop offset="50%" stopColor="transparent" />
                            </linearGradient>
                        </defs>
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                );
            } else {
                // Estrella vacía
                stars.push(
                    <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#3483fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                );
            }
        }
        return stars;
    };

    return (
        <div className="ui-rating">
            {renderStars()}
        </div>
    );
}
