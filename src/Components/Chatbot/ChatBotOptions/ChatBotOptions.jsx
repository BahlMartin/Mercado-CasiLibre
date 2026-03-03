import React from 'react';
import './ChatBotOptions.css';

// Subcomponent: Options
export const ChatOptions = ({ options, onOptionClick }) => (
    <div className="chatbot-options">
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

export default ChatOptions;