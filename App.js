import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Linking, FlatList, TextInput } from 'react-native';

export default function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'aaa' },
    { id: 2, name: 'bbb' },
    { id: 3, name: 'ccc' },
    { id: 4, name: 'ddd' },
    { id: 5, name: 'eee' },
    { id: 6, name: 'fff' },
    { id: 7, name: 'ggg' },
    { id: 8, name: 'hhh' },
    { id: 9, name: 'iii' },
  ]);
  const [number, setNumber] = useState();
  const [result, setResult] = useState();

  const clickHandler = () => setResult(number);

  const renderItem = ({item})=>(
    <View style={styles.listContainer}>
      <Text style={styles.listText}>{item.name}</Text>
    </View>
  );

  return (
    <>
      <View style={styles.formContainer}>
        <Text style={styles.formText}>Enter your number!</Text>
        <TextInput
          style={styles.formInput}
          placeholder='e.g. 123'
          onChangeText={(value) => setNumber(value)}
          keyboardType="numeric"
          secureTextEntry
        />
        <Button style={styles.formButton} title='Submit' onPress={clickHandler}></Button>
        <Text style={styles.formText}>My number is {result}</Text>
      </View>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={user => user.id}
      />
    </>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formInput: {
    padding: 6,
    margin: 10,
    borderColor: '#000',
    borderWidth: 2
  },
  formText: {
    fontSize: 20,
  },
  listContainer: {
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: '#ffff00',
    margin: 10
  },
  listText: {
    color: '#fff',
    margin: 20
  }
});
