import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Pressable,
  Dimensions
} from 'react-native';

const Item = ({title, img, shopName}) => (
  <View style={styles.item}>
    <View>
      <Image
        style={styles.img}
        source={img}
      />
    </View>
    <View style={{marginRight: 'auto', marginLeft: 8}}>
      <Text 
        numberOfLines={2} 
        ellipsizeMode="tail" 
        style={styles.title}
      >{title}</Text>
      <Text style={styles.shop}>Shop: {shopName}</Text>
    </View>
    <Pressable style={styles.button}>
      <Text style={{color: 'white', textAlign: 'center',}}>Chat</Text>
    </Pressable>
  </View>
);

const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f9c2ff',
    padding: 8,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  img: {
    width: "80px",
    height: "80px",
    display: "block"
  },
  title: {
    fontSize: 16,
  },
  shop: {
    fontSize: 12,
    marginTop: 4,
  },
  button: {

    width: "100%",
    padding: "8px 16px",
    backgroundColor: 'red',
  }
});

export default Item;