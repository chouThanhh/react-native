import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
interface ITodo {
  id: number;
  name: string
}

export default function App() {

  const [todo, setTodo] = useState("");

  const [listTodo, setListTodo] = useState<ITodo[]>([])

  // { id: 1, name: "watching hoidanit" }

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const handleAddTodo = () => {
    if (!todo) return;
    setListTodo([...listTodo,
    { id: randomInteger(2, 2000), name: todo }
    ])
    setTodo("")
  }

  //jsx
  return (
    <View style={styles.container}>
      {/* header */}
      <Text style={styles.header}>Todo App</Text>

      {/* form  */}
      <View>
        <TextInput
          value={todo}
          style={styles.todoInput}
          onChangeText={(value) => setTodo(value)}
        />
        <Button title='Add to do'
          onPress={handleAddTodo}
        />
      </View>

      {/* list todo */}
      <View style={styles.body}>
        <FlatList
          data={listTodo}
          keyExtractor={item => item.id + ""}
          renderItem={({ item }) => {
            return (
              <Text style={styles.todoItem}>{item.name}</Text>
            )
          }}
        />
      </View>

    </View>
  );
}

//css in js
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 45
  },
  container: {
    paddingTop: 50,
    // paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  todoInput: {
    borderBottomWidth: 1,
    borderBottomColor: "green",
    padding: 5,
    margin: 15,
  },
  body: {
    paddingHorizontal: 10,
    marginBottom: 20
  },
  todoItem: {
    fontSize: 30,
    borderWidth: 1,
    borderStyle: "dashed",
    marginBottom: 20,
    padding: 10
  }
});
