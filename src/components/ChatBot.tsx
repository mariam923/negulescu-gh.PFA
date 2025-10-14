'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X, MessageCircle, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bună ziua! Sunt asistentul virtual Negulescu Gh.PFA. Vă pot ajuta cu informații despre serviciile noastre de montaj ferestre și uși. Cu ce vă pot ajuta?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll la mesajele noi
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus pe input când se deschide chatbot-ul
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage.text }),
      });

      const data = await response.json();

      if (response.ok) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.response,
          isUser: false,
          timestamp: new Date()
        };
        
        // Simulare typing delay pentru experiență mai naturală
        setTimeout(() => {
          setMessages(prev => [...prev, botMessage]);
          setIsLoading(false);
        }, 800);
      } else {
        throw new Error(data.error || 'Eroare la trimiterea mesajului');
      }
    } catch (error) {
      console.error('Eroare chatbot:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Îmi pare rău, a apărut o eroare. Vă rugăm să încercați din nou sau să ne contactați direct.',
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ro-RO', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <>
      {/* Buton de deschidere chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className={`
            group relative bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600
            hover:from-amber-500 hover:via-yellow-600 hover:to-amber-700
            text-white p-4 rounded-full shadow-2xl
            transform transition-all duration-300 ease-out
            hover:scale-110 hover:shadow-amber-500/25
            ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}
          `}
        >
          <MessageCircle size={24} className="animate-pulse" />
          
          {/* Badge de notificare */}
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
            1
          </div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Aveți întrebări? Sunt aici să vă ajut!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </button>
      </div>

      {/* Fereastra chatbot */}
      <div className={`
        fixed bottom-6 right-6 z-50 w-96 h-[32rem]
        transform transition-all duration-500 ease-out
        ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4 pointer-events-none'}
      `}>
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 h-full flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-amber-400 to-yellow-500 p-2 rounded-full">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">Asistent Negulescu</h3>
                  <p className="text-gray-300 text-sm">Online acum</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors duration-200 p-1 hover:bg-white/10 rounded-full"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fadeIn`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  message.isUser ? 'flex-row-reverse space-x-reverse' : 'flex-row'
                }`}>
                  {/* Avatar */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.isUser 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                      : 'bg-gradient-to-r from-amber-400 to-yellow-500'
                  }`}>
                    {message.isUser ? (
                      <User size={16} className="text-white" />
                    ) : (
                      <Bot size={16} className="text-white" />
                    )}
                  </div>
                  
                  {/* Message Bubble */}
                  <div className={`rounded-2xl px-4 py-3 shadow-lg ${
                    message.isUser
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-800'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-2 ${
                      message.isUser ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start animate-fadeIn">
                <div className="flex items-start space-x-2 max-w-[80%]">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex items-center space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Scrieți mesajul dumneavoastră..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white p-3 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
              >
                <Send size={18} />
              </button>
            </div>
            
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 mt-3">
              {['Contact rapid', 'Programare măsurători', 'Informații servicii'].map((action) => (
                <button
                  key={action}
                  onClick={() => {
                    setInputMessage(action);
                    setTimeout(() => sendMessage(), 100);
                  }}
                  className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors duration-200"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;