import React from 'react';
import './ChatBotHeader.css';

// Subcomponent: Header
export const ChatHeader = ({ title, onClose }) => (
    <div className="chatbot-header">
        <h3>{title}</h3>
        <button className="close-btn" onClick={onClose}>×</button>
    </div>
);

export default ChatHeader;
