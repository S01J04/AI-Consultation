import React, { useState } from 'react';
import { Mic, Send, MicOff } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../store/slices/chatSlice';

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const isVoiceEnabled = useSelector(state => state.chat.isVoiceEnabled);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      content: message,
      sender: 'user',
      timestamp: Date.now(),
      type: 'text'
    };

    dispatch(addMessage(newMessage));
    
    // Mock AI response
    setTimeout(() => {
      dispatch(addMessage({
        id: (Date.now() + 1).toString(),
        content: `AI response to: ${message}`,
        sender: 'ai',
        timestamp: Date.now() + 1000,
        type: 'text'
      }));
    }, 1000);

    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-white p-4 border-t">
      <button
        type="button"
        className={`p-2 rounded-full ${isVoiceEnabled ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'} hover:bg-opacity-80`}
      >
        {isVoiceEnabled ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
      </button>
      
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      
      <button
        type="submit"
        className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
};

export default ChatInput;