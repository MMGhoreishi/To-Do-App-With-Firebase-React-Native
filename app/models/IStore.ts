import ITodo from "./ITodo";

export default interface IStore {
  todos: { todos: ITodo[] };
  todoValue: string;
}
