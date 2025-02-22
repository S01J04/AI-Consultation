import React from 'react';
import { User, Bot } from 'lucide-react';

const ChatMessage = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex items-start gap-4 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isUser ? 'bg-indigo-600' : 'bg-gray-200'}`}>
        {isUser ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-gray-600" />}
      </div>
      <div className={`flex-1 max-w-[70%] rounded-lg p-4 ${isUser ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <p className="text-sm">{message.content}</p>
        <span className="text-xs mt-2 block opacity-70">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;