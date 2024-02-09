import { View, StyleSheet, TextInput, Button, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { todosCollection } from "../includes/firebase";
import RenderTodo from "../components/RenderTodo";
import { ITodo } from "../models/ITodo";
import styles from "../styles";

const List = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const subscriber = todosCollection.onSnapshot({
      next: (snapshot) => {
        const todos: ITodo[] = [];
        snapshot.docs.forEach((doc) => {
          todos.push({
            id: doc.id,
            done: doc.data().done,
            title: doc.data().done.title,
          });
        });

        setTodos(todos);
      },
    });

    // // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  const addTodo = async () => {
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
            renderItem={RenderTodo}
            keyExtractor={(todo) => todo.id}
            // removeClippedSubviews={true}
          />
        </View>
      )}
    </View>
  );
};

export default List;
