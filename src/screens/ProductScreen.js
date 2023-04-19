import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import products from "../data/Products";

const ProductScreen = () => {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.image}
            />
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});

export default ProductScreen;
