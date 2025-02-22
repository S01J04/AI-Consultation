import React from 'react';
import { useSelector } from 'react-redux';
import ChatMessage from '../components/chat/ChatMessage';
import ChatInput from '../components/chat/ChatInput';
import { Settings, Volume2, VolumeX } from 'lucide-react';

const Chat = () => {
  const messages = useSelector(state => state.chat.messages);
  const isTTSEnabled = useSelector(state => state.chat.isTTSEnabled);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="bg-white border-b p-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">AI Consultation</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            {isTTSEnabled ? (
              <Volume2 className="w-5 h-5 text-indigo-600" />
            ) : (
              <VolumeX className="w-5 h-5 text-gray-400" />
            )}
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>

      <ChatInput />
    </div>
  );
};

export default Chat;