import react from 'react';
import { Text, ScrollView, Image, StyleSheet, View, Button, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <ScrollView
      style={styles.container}
    >
      <View style={styles.img}>
        <Image
          source={require('./assets/ellipse8.svg')}
        />
      </View>
      <Text style={styles.title}>Grow your business</Text>
      <Text style={styles.text}>We will help you to grow your business using online server</Text>
      <View style={styles.wrapBtns}>
        <TouchableOpacity style={styles.wrapBtn} >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapBtn} >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    backgroundImage: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)',
    padding: 4,
  },
  img: {
    alignItems: 'center',
    margin: '40px 0',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30,
  },
  text: {
    textAlign: 'center',
    fontWeight: 500,
    marginBottom: 30,
  },
  wrapBtns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'

  },
  wrapBtn: {
    width: 100,
    padding: '8px 12px',
    backgroundColor: '#e3c000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 500,
  }

})


