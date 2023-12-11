import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ObjectInterface } from '@/data/object';

const object = null;

interface initialType {
  value: { men: string; women: string; data?: ObjectInterface[] | null };
}
const initialState: initialType = {
  value: { men: 'BESTSELLERS', women: 'BESTSELLERS', data: object },
};

const specSlice = createSlice({
  name: 'spec',
  initialState,
  reducers: {
    change: (
      state,
      action: PayloadAction<{ men: string; women: string; data?: ObjectInterface[] | null }>
    ) => {
      state.value.men = action.payload.men;
      state.value.women = action.payload.women;
      state.value.data = action.payload.data;
    },
  },
});

export const { change } = specSlice.actions;

export default specSlice.reducer;
