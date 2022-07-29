import { createSlice } from '@reduxjs/toolkit';
import { cards } from '../data/cards';
import type { RootState } from '.';
export interface cardInterface {
  title: String;
  link: String;
  author: String;
  location: String;
  year: String;
  shortList?: Boolean;
  outOfCompetition?: Boolean;
  fringe?: Boolean;
  longList?: Boolean;
  lark?: Boolean;
}
export const cardsSlice = createSlice({
  name: 'cards',
  initialState: cards,
  reducers: {
    get: (state) => state,
  },
});
export const { get } = cardsSlice.actions;
export const selectCards = (state: RootState) => state;
export default cardsSlice.reducer;
