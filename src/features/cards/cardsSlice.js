import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: {},
};
const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCards: (state, action) => {
      const { cardId, front, back } = action.payload;
      state.cards[cardId] = {
        cardId,
        front,
        back,
      };
    },
  },
});
export const { addCards } = cardsSlice.actions;
export const selectCards = (state, cardId) => state.cards.cards[cardId];
export default cardsSlice.reducer;
