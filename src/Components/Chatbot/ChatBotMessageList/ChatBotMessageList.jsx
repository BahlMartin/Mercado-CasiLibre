import React, { useEffect, useRef } from 'react';
import './ChatBotMessageList.css';

// Subcomponent: Message List
export const ChatMessageList = ({ messages }) => {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="chatbot-messages">
            {messages.map((msg) => (
                <div key={msg.id} className={`message ${msg.sender}`}>
                    {msg.text.split('**').map((part, i) =>
                        i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                    )}
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default ChatMessageList;