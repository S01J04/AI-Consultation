import { createSlice } from '@reduxjs/toolkit';
import { mockMessages } from '../../mockData';

const initialState = {
  messages: mockMessages,
  isVoiceEnabled: false,
  isTTSEnabled: false,
  loading: false,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setVoiceEnabled: (state, action) => {
      state.isVoiceEnabled = action.payload;
    },
    setTTSEnabled: (state, action) => {
      state.isTTSEnabled = action.payload;
    },
    clearChat: (state) => {
      state.messages = [];
    },
  },
});

export const { addMessage, setVoiceEnabled, setTTSEnabled, clearChat } = chatSlice.actions;
export default chatSlice.reducer;