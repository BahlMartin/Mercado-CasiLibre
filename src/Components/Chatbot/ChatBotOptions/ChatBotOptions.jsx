import React, { useState } from 'react';
import './ChatBotOptions.css';

// Subcomponent: Options
export const ChatOptions = ({ options, onOptionClick }) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="chatbot-options">
            <button className="close-options-btn" onClick={() => setIsVisible(false)} aria-label="Ocultar opciones">
                &times;
            </button>
            {options.map((option) => (
                <button
                    key={option.id}
                    className="option-btn"
                    onClick={() => onOptionClick(option)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
};

export default ChatOptions;