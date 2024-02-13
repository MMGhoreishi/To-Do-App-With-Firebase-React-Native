import { Button, TextInput, View } from "react-native";
import styles from "../styles";
import { useSelector, useDispatch } from "react-redux";
import { setTodoValue } from "../todoSlice";
import { addTodo } from "../includes/helper";

const AddTodo = () => {
  const { todoValue } = useSelector((state: any) => state.todos);
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
