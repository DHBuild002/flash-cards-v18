import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: {},
};
const quizzesSlice = createSlice({
  name: "quizzesSlice",
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      const { quizId, name, topicId, cardIds } = action.payload;
      state.quizzes[quizId] = {
        quizId,
        name,
        topicId,
        cardIds,
      };
    },
  },
});

export const { addQuiz } = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;
