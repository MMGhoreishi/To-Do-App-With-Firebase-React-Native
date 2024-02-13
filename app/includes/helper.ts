import { Alert } from "react-native";
import { todosCollection } from "../includes/firebase";

export const addTodo = async (todo: any, setTodo: any) => {
  try {
    const docRef = await todosCollection.add({
      title: todo,
      done: false,
    });
    setTodo("");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const deleteItem = async (id: any) => {
  await todosCollection.doc(id).delete();

  //   Alert.alert("Delete Item", "Are you sure to delete the item?", [
  //     { text: "NO", onPress: () => "", style: "cancel" },
  //     {
  //       text: "YES",
  //       onPress: async () => await todosCollection.doc(id).delete(),
  //     },
  //   ]);
};

export const toggleDone = async (id: any, done: any) => {
  await todosCollection.doc(id).update({ done: !done });
};
