import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import products from "../data/Products";
const ProductDetailScreen = () => {
  let product = products[0];
  const { width } = useWindowDimensions();
  const addToCart = () => {
    console.log("Add to cart");
  };
  return (
    <View>
      {/* Image Carousel */}
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{
                uri: item,
              }}
              style={{ width: width, aspectRatio: 1 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>

          {/* Price */}
          {/* <Text style={styles.price}>${product.price}</Text> */}

          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      {/* Add to cart button */}
      <View style={styles.priceCart}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${product.price}.00</Text>
        </View>
        <Pressable onPress={addToCart} style={styles.button}>
          <Text style={styles.buttonText}>Add to cart</Text>
        </Pressable>
      </View>

      {/* Navigation Icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 30,
    letterSpacing: 0.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
  button: {
    backgroundColor: "black",
    width: "40%",
    alignSelf: "flex-end",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
  },
  priceCart: {
    position: "absolute",
    backgroundColor: "white",
    bottom: 0,
    width: "100%",
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  priceContainer: {
    // backgroundColor: 'pink',
    width: '50%',
  }
});

export default ProductDetailScreen;
