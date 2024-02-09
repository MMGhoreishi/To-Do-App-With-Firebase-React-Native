import {
  View,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import { todosCollection, db } from "../includes/firebase";
import Icon from "react-native-ionicons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export interface Todo {
  done: boolean;
  id: string;
  title: string;
}

const renderTodo = ({ item }: any) => {
  const toggleDone = async () => {
    await todosCollection.doc(item.id).update({ done: !item.done });
  };

  const deleteItem = async () => {
    await todosCollection.doc(item.id).delete();
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

      {/* <Icon
        name="trash-bin-outline"
        size={24}
        color="red"
        onPress={deleteItem}
      /> */}

      <FontAwesomeIcon
        icon="fa-trash"
        size={24}
        color={"red"}
        onPress={deleteItem}
      />
    </View>
  );
};

const List = () => {
  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const subscriber = todosCollection.onSnapshot({
      next: (snapshot) => {
        const todos: any[] = [];
        snapshot.docs.forEach((doc) => {
          todos.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setTodos(todos);
      },
    });

    // // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  const addTodo = async () => {
    console.log("dddddd");

    try {
      const docRef = await todosCollection.add({
        title: todo,
        done: false,
      });
      setTodo("");
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add new todo"
          onChangeText={(text) => setTodo(text)}
          value={todo}
        />
        <Button onPress={addTodo} title="Add Todo" disabled={todo === ""} />
      </View>

      {todos.length > 0 && (
        <View>
          <FlatList
            data={todos}
            renderItem={renderTodo}
            keyExtractor={(todo) => todo.id}
            // removeClippedSubviews={true}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  form: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  todo: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  todoText: {
    flex: 1,
    paddingHorizontal: 4,
  },
  todoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 4,
  },
});

export default List;
