import { createSlice } from '@reduxjs/toolkit';
import { authors } from '../data/authors';
import type { RootState } from '.';

export const authorsSlice = createSlice({
  name: 'authors',
  initialState: authors,
  reducers: {
    get: (state) => state,
  },
});
export const { get } = authorsSlice.actions;
export const selectAuthors = (state: RootState) => state;
export default authorsSlice.reducer;
