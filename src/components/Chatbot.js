import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

const Chatbot = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! 👋 I'm your Aerial Stories assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    'Tournament registration',
    'Pricing information',
    'Available services',
    'Contact details'
  ];

  const getBotResponse = (msg) => {
    const lower = msg.toLowerCase();
    if (lower.includes('tournament') || lower.includes('register')) {
      return "Great! I can help you with tournament registration. Would you like to register for an upcoming event or learn more about our packages?";
    } else if (lower.includes('price') || lower.includes('cost')) {
      return "Packages start at $500 for golf tournaments. Sports events begin at $350. Do you want a detailed quote?";
    } else if (lower.includes('service')) {
      return "We offer:\n• Golf Tournament Photography\n• Sports Event Coverage\n• Real Estate Aerial Shots\n• Landscape Photography\n• Commercial Projects";
    } else if (lower.includes('contact')) {
      return "You can reach us at:\n📧 info@aerialstories.com\n📞 +1 (234) 567-890\n📍 Dagupan, Ilocos, Philippines";
    } else if (lower.includes('hello') || lower.includes('hi')) {
      return "Hello! How can I assist you with your aerial photography needs today?";
    }
    return "I'm here to help! Ask me about tournament registration, pricing, services, or contact info.";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg = { id: messages.length + 1, text: inputValue, sender: 'user', timestamp: new Date() };
    setMessages([...messages, userMsg]);
    setInputValue('');

    setTimeout(() => {
      const botMsg = { id: messages.length + 2, text: getBotResponse(inputValue), sender: 'bot', timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);
    }, 800);
  };

  const handleQuickReply = (reply) => {
    setInputValue(reply);
    handleSend();
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 p-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 z-50"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-5 right-5 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[70vh] md:h-[600px] ${theme.cardBg} ${theme.border} border rounded-2xl shadow-2xl flex flex-col z-50 animate-in slide-in-from-bottom-4 duration-300`}>
          
          {/* Header */}
          <div className={`flex items-center justify-between p-4 rounded-t-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white`}>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">Aerial Assistant</h3>
                <p className="text-xs sm:text-sm text-white/80">Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-2 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === 'user' ? 'bg-violet-500' : theme.cardBg}`}>
                    {msg.sender === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className={`w-4 h-4 ${theme.text}`} />}
                  </div>
                  <div>
                    <div className={`px-3 sm:px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-violet-500 text-white' : `${theme.messageBg} ${theme.text}`}`}>
                      <p className="text-sm sm:text-base whitespace-pre-line">{msg.text}</p>
                    </div>
                    <p className={`text-xs sm:text-sm ${theme.subtext} mt-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 3 && (
            <div className="px-3 sm:px-4 py-2 border-t border-gray-200 dark:border-gray-700 flex overflow-x-auto space-x-2">
              {quickReplies.map((reply, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickReply(reply)}
                  className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs sm:text-sm bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:opacity-90 transition-opacity`}
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className={`p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700 flex items-center space-x-2`}>
            <input
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className={`flex-1 px-3 sm:px-4 py-2 rounded-full ${theme.inputBg} ${theme.text} focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm sm:text-base`}
            />
            <button
              onClick={handleSend}
              className="p-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-full hover:scale-110 transition-transform"
            >
              <Send className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
