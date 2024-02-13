import { createSlice } from "@reduxjs/toolkit";
import ITodo from "./models/ITodo";
import { IPayloadTodoList, IPayloadTodoInputValue } from "./models";

let todoValue: string = "";
const todos: ITodo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos,
    todoValue,
  },
  reducers: {
    setTodoList(state, { payload }: IPayloadTodoList) {
      state.todos = [...payload];
    },
    setTodoValue(state, { payload }: IPayloadTodoInputValue) {
      state.todoValue = payload;
    },
  },
});
export const { setTodoList, setTodoValue } = todoSlice.actions;
export default todoSlice;
