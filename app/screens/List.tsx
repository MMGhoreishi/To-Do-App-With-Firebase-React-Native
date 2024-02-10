import {
  View,
  TextInput,
  Button,
  FlatList,
  Alert,
  TouchableOpacity,
  Text,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { todosCollection } from "../includes/firebase";
import { ITodo } from "../models/ITodo";
import styles from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { deleteItem, toggleDone, addTodo } from "../includes/helper";

const renderTodo = ({ item }: any) => {
  console.log("renderTodo222>>>");
  console.log(item);

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
        <Text style={styles.todoText}>{item.title}</Text>
      </TouchableOpacity>

      <Pressable onPress={() => deleteItem(item.id)}>
        <FontAwesomeIcon icon="fa-trash" size={24} color={"red"} />
      </Pressable>
    </View>
  );
};

const List = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todo, setTodo] = useState("");

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

        setTodos(todos);
      },
    });

    // // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add new todo"
          onChangeText={(text) => setTodo(text)}
          value={todo}
        />
        <Button
          onPress={() => addTodo(todo, setTodo)}
          title="Add Todo"
          disabled={todo === ""}
        />
      </View>

      {todos.length > 0 && (
        <View>
          <FlatList
            data={todos}
            renderItem={renderTodo}
            keyExtractor={(todo) => todo.id}
          />
        </View>
      )}
    </View>
  );
};

export default List;
