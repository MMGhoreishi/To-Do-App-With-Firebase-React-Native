import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    todoValue: "",
  },
  reducers: {
    setTodoList(state, { payload }) {
      state.todos = [...payload];
    },
    setTodoValue(state, { payload }) {
      state.todoValue = payload;
    },
  },
});
export const { setTodoList, setTodoValue } = todoSlice.actions;
export default todoSlice;
