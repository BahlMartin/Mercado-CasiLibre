import React, { useState } from 'react';
import './ChatBotFooter.css';

const ChatFooter = ({ onSendMessage }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        onSendMessage(inputValue);
        setInputValue('');
    };

    return (
        <form className="chatbot-footer" onSubmit={handleSend}>
            <input
                type="text"
                placeholder="Escribí tu mensaje..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="send-btn">
                <svg viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
            </button>
        </form>
    );
};

export default ChatFooter;
