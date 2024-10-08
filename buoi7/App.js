import { useEffect, useState } from 'react'
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import Item from './components/item'

 


const App = () => {

  const [toDo, setToDo] = useState("")
  const [listTodo, setListTodo] = useState([])
  const [typeButton, setTypeButton] = useState("add")
  const [editing, setEditing] = useState()

  const handleButtonToDo = () => {
    if(typeButton == "add") {
      setListTodo(prevList => 
        [...prevList, {id: Math.floor(Math.random() * 100), content: toDo}]
      )
      setToDo("")
    } else {
      setListTodo(prevList =>
        prevList.map(item => {
          if (item.id === editing) {
            return { ...item, content: toDo }
          }
          return item
        })
      );
      setToDo("")
      setTypeButton("add")
    }
    
  }

  

  const renderItem = ({item}) => {
    return (
      <View style={styles.toDoItem}>
        <Text style={{ fontSize: 16}}>{item.content}</Text>
        <View 
          style={{
            flexDirection: 'row',
            justifyContent: "space-between",
            alignItems: 'center',
            gap: 10
          }}
        >
          <TouchableOpacity 
            onPress={() => {
              setTypeButton("edit")
              setToDo(item.content)
              setEditing(item.id)
            }}
          >
            <Text>edit</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => {
            if (confirm("Are you sure you want to delete this item ?")) {
              setListTodo(prevList => prevList.filter((_item) => _item.id !== item.id))
            }
          }}
          >
            <Text style={styles.iconClose}>&times;</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header} >Todo App</Text>
      <TextInput 
        value={toDo}
        style={styles.input} 
        onChangeText={(value) => setToDo(value)}
      />
      <Button 
        title={`${typeButton} toDo`}
        onPress={handleButtonToDo}
      />
      <FlatList 
        data={listTodo}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: 'pink',
    borderRadius: 50,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  toDoItem: {
    paddingHorizontal: 10,
    backgroundColor: 'pink',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'
  },
  iconClose: {
    fontSize: 24,
    lineHeight: 24,
    paddingBottom: 6,
  }
});

export default App;