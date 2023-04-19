import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ProductScreen from "./src/screens/ProductScreen";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";
import CartScreen from "./src/screens/CartScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductScreen /> */}
      {/* <ProductDetailScreen /> */}
      <CartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
