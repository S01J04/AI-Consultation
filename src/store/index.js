import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import chatReducer from './slices/chatSlice';
import consultantReducer from './slices/consultantSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    consultant: consultantReducer,
  },
});