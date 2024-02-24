import { FlatList, Pressable, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import styles from "../styles";
import { deleteItem, toggleDone } from "../includes/helper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ITodo } from "../models";
import IStore from "../models/IStore";

const ItemList = () => {
  const { todos } = useSelector((state: IStore) => state.todos);

  const renderTodo = ({ item }: { item: ITodo }) => {
    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity
          onPress={() => toggleDone(String(item.id), item.done)}
          style={styles.todo}
        >
          {item.done && (
            <FontAwesomeIcon icon="circle" size={20} color={"green"} />
          )}
          {!item.done && (
            <FontAwesomeIcon icon="circle" size={20} color={"black"} />
          )}
          <View>{item.title}</View>
        </TouchableOpacity>

        <Pressable onPress={() => item.id && deleteItem(item.id)}>
          <FontAwesomeIcon icon="nfc-trash" size={24} color={"red"} />
        </Pressable>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={renderTodo}
        keyExtractor={(todo) => (todo.id ? todo.id : "")}
      />
    </View>
  );
};

export default ItemList;
