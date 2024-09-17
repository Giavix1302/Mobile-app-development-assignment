import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.lock}>
        <Image source={require('./assets/lock-152879 1.png')} />
      </View>
      <View style={styles.TextHeads}>
        <Text style={styles.Text1} >FORGET</Text>
        <Text style={styles.Text1} >PASSWORD</Text>
      </View>
      <View style={styles.TextHeads}>
        <Text style={styles.Text2} >Provide your account’s email for which you want to reset your password</Text>
      </View>
      <View style={styles.inputs}>
        <Image style={styles.inputImg} source={require('./assets/mail-2935365 1.png')} />
        <TextInput style={styles.input} secureTextEntry={true} placeholder='Email' />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: '#d0f3f5',
  },
  lock: {
    marginTop: 50,
    marginBottom: 50,
  },
  TextHeads: {
    alignItems: 'center',
    margin: 22
  },
  Text1: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  Text2: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  inputs: {
    flexDirection: 'row',
    backgroundColor: '#c3c5c4',
    width: 305,
    height: 45,
    paddingLeft: 10,
    justifyContent: 'flex-start',
    margin: 16

  },
  inputImg: {

  },
  input: {
    fontSize: 18,
    paddingLeft: 5
  },
  buttons: {
    backgroundColor: '#e3c100',
    width: 305,
    height: 45,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',

  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  }
})