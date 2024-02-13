import { Text } from "react-native";
import styles from "../styles";
import { useSelector, useDispatch } from "react-redux";
import { setTodoList } from "../todoSlice";
import { ITodo } from "../models";
import { todosCollection } from "../includes/firebase";
import { useEffect } from "react";
import { ItemList } from "../components";

const TodosList = () => {
  const { todos } = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const subscriber = todosCollection.onSnapshot({
      next: (snapshot) => {
        const todos: ITodo[] = [];
        snapshot.docs.forEach((doc) => {
          const item = { ...doc.data() };
          todos.push({
            id: doc.id,
            title: item.title,
            done: item.done,
          });
        });

        dispatch(setTodoList(todos));
      },
    });
    // // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  return (
    <>
      {todos.length > 0 ? (
        <ItemList />
      ) : (
        <Text style={styles.emptyList}>There are not todos</Text>
      )}
    </>
  );
};

export default TodosList;
