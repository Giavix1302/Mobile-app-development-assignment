
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  FlatList,
  TextInput,
} from 'react-native';
import ProductItem from './components/ProductItem';


const data = [
  {
    id: 1,
    url: require('./assets/giacchuyen1.png'),
    title: 'Cách chuyển từ cổng USB sang PS2...',
    price: '69.000đ',
    discount: '-39%',
  },
  {
    id: 2,
    url: require('./assets/daynguon1.png'),
    title: 'Cách chuyển từ cổng USB sang PS2...',
    price: '69.000đ',
    discount: '-39%',
  },
  {
    id: 3,
    url: require('./assets/dauchuyendoipsps21.png'),
    title: 'Cách chuyển từ cổng USB sang PS2...',
    price: '69.000đ',
    discount: '-39%',
  },
  {
    id: 4,
    url: require('./assets/dauchuyendoi1.png'),
    title: 'Cách chuyển từ cổng USB sang PS2...',
    price: '69.000đ',
    discount: '-39%',
  },
  {
    id: 5,
    url: require('./assets/carbusbtops21.png'),
    title: 'Cách chuyển từ cổng USB sang PS2...',
    price: '69.000đ',
    discount: '-39%',
  },

  {
    id: 6,
    url: require('./assets/daucam1.png'),
    title: 'Cách chuyển từ cổng USB sang PS2',
    price: '69.000đ',
    discount: '-39%',
  },
];



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/ant-design_arrow-left-outlined.png')} />
        <View style={styles.search}>
          <Image source={require('./assets/whh_magnifier.png')} />
          <TextInput
            // value="Dây cáp usb"
            placeholder='Dây cáp usb'
            style={{ width: '80%', paddingLeft: 8 }}
          />
        </View>
        <View style={styles.cart}>
          <Image source={require('./assets/bi_cart-check.png')} />
        </View>
        <Image source={require('./assets/more.png')} />
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <ProductItem obj={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}

      />
      <View style={styles.bottom}>
        <Image source={require('./assets/bar.png')} />
        <Image source={require('./assets/Home.png')} />
        <Image source={require('./assets/back.png')} />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    height: 42,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#1ba9ff',
    paddingHorizontal: 15,
  },
  search: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 200,
    padding: 5,

  },
  cart: {
    flexDirection: 'row',
  },
  groupItemContainer: {
    alignItems: 'center',
    marginTop: 25

  },
  bottom: {
    height: 50,
    width: '100%',
    backgroundColor: '#1ba9ff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});