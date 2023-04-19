import {
  View,
  Image,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import products from "../data/Products";
const CartScreen = () => {
  const product = products[0];
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image
          style={styles.image}
          source={{
            uri: product.image,
          }}
        />
        </View>
        <View>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}.00</Text>
          <Text style={styles.stock}>In Stock</Text>
          <View style={styles.counterSection}>
            <Pressable style={styles.counterBtn}>
              <Text>-</Text>
            </Pressable>
            <Text style={styles.counterText}>
              0
            </Text>
            <Pressable style={styles.counterBtn}>
              <Text>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '60%',
    aspectRatio: 1,
    borderRadius: 100,
    marginTop: 'auto',
    marginBottom: 'auto',
    // marginLeft: 'auto',
    marginRight: 'auto'
  },
  counterSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    alignItems: 'center'
  },
  counterText: {
    fontSize: 20,
    alignSelf: 'center'
  },
  counterBtn: {
    backgroundColor: 'lightgrey',
    padding: 5,
    borderRadius: 5,
    width: 30,
    height: 30,
    alignItems: 'center'
  },
  title:{
    fontWeight: 500,
    fontSize: 20,
    marginBottom: 10
  },
  price: {
    fontWeight: 500,
    fontSize: 16,
    marginBottom: 6
  },
  stock: {
    color: 'green'
  },
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    marginTop: 50,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: 'lightgray',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1
  },
});

export default CartScreen;
