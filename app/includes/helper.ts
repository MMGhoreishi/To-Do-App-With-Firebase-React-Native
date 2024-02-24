import { Alert } from "react-native";
import { todosCollection } from "../includes/firebase";
import { ITodo } from "../models";

export const addTodo = async (todo: ITodo, setTodo: Function) => {
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

export const deleteItem = async (id: string) => {
  console.log("Id to Delete>>>");
  console.log(id);

  await todosCollection.doc(id).delete();

  //   Alert.alert("Delete Item", "Are you sure to delete the item?", [
  //     { text: "NO", onPress: () => "", style: "cancel" },
  //     {
  //       text: "YES",
  //       onPress: async () => await todosCollection.doc(id).delete(),
  //     },
  //   ]);
};

export const toggleDone = async (id: string, done: boolean) => {
  await todosCollection.doc(id).update({ done: !done });
};
