import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {},
};
const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id,
        name,
        icon,
        quizIds: [],
      };
    },
    addQuizTopic: (state, action) => {
      const { topicId, quizId } = action.payload;
      if (state.topics[topicId]) {
        state.topics[topicId].quizIds.push(quizId);
      } else {
        console.warn(`Topic with id ${topicId} not found`);
      }
    },
  },
});
export const { addTopic, addQuizTopic } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;
