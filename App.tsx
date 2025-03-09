import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  //jsx
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.header}>hoidanit1</Text>
        <Text style={styles.parent}>
          hoidanit2
          <Text style={styles.child}>bla bla</Text>
        </Text>
      </View>
      <Text style={styles.hello1}>Hello world 1</Text>
      <Text>Hello world 2</Text>
    </View>
  );
}

//css in js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello1: {
    color: 'red', fontSize: 60,
    borderColor: 'green',
    borderWidth: 1,
    padding: 10
  },
  header: {
    fontSize: 30,
    fontWeight: "600"
  },
  parent: {
    fontSize: 60,
    color: "green"
  },
  child: {
    fontSize: 30,
    color: "pink"
  }
});
