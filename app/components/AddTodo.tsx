import { Button, TextInput, View } from "react-native";
import styles from "../styles";
import { useSelector, useDispatch } from "react-redux";
import { setTodoValue } from "../data/todoSlice";
import { addTodo } from "../includes/helper";
import IStore from "../models/IStore";

const AddTodo = () => {
  const { todoValue } = useSelector((state: IStore) => state.todos);

  const dispatch = useDispatch();

  const clearTodoTextInput = () => {
    dispatch(setTodoValue(""));
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add new todo"
        onChangeText={(text) => dispatch(setTodoValue(text))}
        value={todoValue}
      />
      <Button
        onPress={() => addTodo(todoValue, clearTodoTextInput)}
        title="Add Todo"
        disabled={todoValue === ""}
      />
    </View>
  );
};

export default AddTodo;
