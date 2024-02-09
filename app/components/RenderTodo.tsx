import { View, TouchableOpacity, Text, Pressable, Alert } from "react-native";
import { todosCollection } from "../includes/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import styles from "../styles";

const RenderTodo = ({ item }: any) => {
  const toggleDone = async () => {
    await todosCollection.doc(item.id).update({ done: !item.done });
  };

  const deleteItem = async () => {
    Alert.alert("Delete Item", "Are you sure to delete the item?", [
      { text: "NO", onPress: () => "", style: "cancel" },
      {
        text: "YES",
        onPress: async () => await todosCollection.doc(item.id).delete(),
      },
    ]);
  };

  return (
    <View style={styles.todoContainer}>
      <TouchableOpacity onPress={toggleDone} style={styles.todo}>
        {item.done && (
          <FontAwesomeIcon icon="fa-circle" size={20} color={"green"} />
        )}
        {!item.done && (
          <FontAwesomeIcon icon="fa-circle" size={20} color={"black"} />
        )}
        <Text style={styles.todoText}>{item.title}</Text>
      </TouchableOpacity>

      <Pressable onPress={deleteItem}>
        <FontAwesomeIcon icon="fa-trash" size={24} color={"red"} />
      </Pressable>
    </View>
  );
};

export default RenderTodo;
