import { createSlice } from '@reduxjs/toolkit';
import { mockConsultants } from '../../mockData';

const initialState = {
  consultants: mockConsultants,
  selectedConsultant: null,
  loading: false,
};

const consultantSlice = createSlice({
  name: 'consultant',
  initialState,
  reducers: {
    setConsultants: (state, action) => {
      state.consultants = action.payload;
    },
    setSelectedConsultant: (state, action) => {
      state.selectedConsultant = action.payload;
    },
    clearSelectedConsultant: (state) => {
      state.selectedConsultant = null;
    },
  },
});

export const { setConsultants, setSelectedConsultant, clearSelectedConsultant } = consultantSlice.actions;
export default consultantSlice.reducer;