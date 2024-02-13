import { View } from "react-native";
import styles from "../styles";
import { AddTodo, TodosList } from "../components";

const TodoApp = () => {
  return (
    <View style={styles.container}>
      <AddTodo />
      <TodosList />
    </View>
  );
};

export default TodoApp;
