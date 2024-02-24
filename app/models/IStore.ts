import ITodo from "./ITodo";

export default interface IStore {
  todos: ITodo[];
  todoValue: string;
}
