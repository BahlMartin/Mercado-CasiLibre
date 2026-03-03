import React, { createContext, useContext, useState } from 'react';
import { ProductContext } from './ProductContext';

const ChatContext = createContext();

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

export const ChatProvider = ({ children }) => {
  const { getBestSeller, getWorstSeller } = useContext(ProductContext);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '¡Hola! Bienvenido al soporte de MercadoClone. ¿En qué podemos ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date().toISOString()
    }
  ]);

  const toggleChat = () => setIsOpen(prev => !prev);

  const addMessage = (text, sender = 'user') => {
    const newMessage = {
      id: Date.now(),
      text,
      sender,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  };

  const handleOptionClick = (option, navigate) => {
    addMessage(option.label, 'user');

    setTimeout(() => {
      if (option.id === 'best_seller') {
        const bestSeller = getBestSeller();
        addMessage(`El producto más vendido es: **${bestSeller.name}** con ${bestSeller.salesCount} ventas.`, 'bot');
        setTimeout(() => {
          navigate(`/product/${bestSeller.id}`);
          setIsOpen(false);
        }, 1500);
      } else if (option.id === 'worst_seller') {
        const worstSeller = getWorstSeller();
        addMessage(`El producto menos vendido es: **${worstSeller.name}** con ${worstSeller.salesCount} ventas.`, 'bot');
        setTimeout(() => {
          navigate(`/product/${worstSeller.id}`);
          setIsOpen(false);
        }, 1500);
      }
    }, 1000);
  };

  return (
    <ChatContext.Provider value={{ isOpen, toggleChat, messages, addMessage, handleOptionClick, setIsOpen }}>
      {children}
    </ChatContext.Provider>
  );
};
