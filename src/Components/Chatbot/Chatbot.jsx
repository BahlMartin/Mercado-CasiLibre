import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import { useChat } from '../../Context/Chatcontext';
import { useNavigate } from 'react-router';
import ChatHeader from './ChatBotHeader/ChatBotHeader';
import ChatMessageList from './ChatBotMessageList/ChatBotMessageList';
import ChatOptions from './ChatBotOptions/ChatBotOptions';
import ChatFooter from './ChatBotFooter/ChatBotFooter';


const Chatbot = () => {
    const { isOpen, toggleChat, messages, addMessage, handleOptionClick } = useChat();
    const navigate = useNavigate();

    const options = [
        { id: 'best_seller', label: 'Abrir el producto mas vendido' },
        { id: 'worst_seller', label: 'Abrir el producto menos vendido' }
    ];

    const handleSendMessage = (text) => {
        addMessage(text, 'user');
        setTimeout(() => {
            addMessage('No puedo procesar mensajes libres en este momento, por favor utiliza las opciones predefinidas.', 'bot');
        }, 1000);
    };

    return (
        <div className="chatbot-container">
            {!isOpen && (
                <button className="chatbot-fab" onClick={toggleChat}>
                    <svg viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                    </svg>
                </button>
            )}

            {isOpen && (
                <div className="chatbot-window">
                    <ChatHeader title="Ayuda MercadoClone" onClose={toggleChat} />
                    <ChatMessageList messages={messages} />
                    <ChatOptions options={options} onOptionClick={(opt) => handleOptionClick(opt, navigate)} onClose={toggleChat} />
                    <ChatFooter onSendMessage={handleSendMessage} />
                </div>
            )}
        </div>
    );
};

export default Chatbot;
