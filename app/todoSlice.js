import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    setTodoList(state, action) {
      console.log("action.payload2-testCcc>>>");
      console.log(action.payload);

      state.todos = [...action.payload];
    },
  },
});
export const { setTodoList } = todoSlice.actions;
export default todoSlice;
