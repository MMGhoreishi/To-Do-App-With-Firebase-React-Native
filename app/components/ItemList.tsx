import { FlatList, Pressable, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import styles from "../styles";
import { deleteItem, toggleDone } from "../includes/helper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const ItemList = () => {
  const { todos } = useSelector((state: any) => state.todos);

  const renderTodo = ({ item }: any) => {
    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity
          onPress={() => toggleDone(item.id, item.done)}
          style={styles.todo}
        >
          {item.done && (
            <FontAwesomeIcon icon="fa-circle" size={20} color={"green"} />
          )}
          {!item.done && (
            <FontAwesomeIcon icon="fa-circle" size={20} color={"black"} />
          )}
          <View>{item.title}</View>
        </TouchableOpacity>

        <Pressable onPress={() => deleteItem(item.id)}>
          <FontAwesomeIcon icon="fa-trash" size={24} color={"red"} />
        </Pressable>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={renderTodo}
        keyExtractor={(todo) => todo.id}
      />
    </View>
  );
};

export default ItemList;
