import React from 'react'
import './Badge.css'

export default function Badge({ text, type = 'success', variant = 'default' }) {
    if (!text) return null

    return (
        <span className={`ui-badge ui-badge--${type} ui-badge--v-${variant}`}>
            {text}
        </span>
    )
}
