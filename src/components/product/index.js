import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import styles from "./styles";

const data = [
  {
    image: "https://placeimg.com/640/483/tech",
    name: "TV",
    price: "100$",
  },
  {
    image:
      "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
    name: "Laptop",
    price: "1000$",
  },
  {
    image: "https://placeimg.com/640/480/tech",
    name: "Mobile",
    price: "200$",
  },
];

const Product = () => {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#305049" />
      <View style={styles.header}>
        <Text style={styles.headingStyle}>Product</Text>
      </View>
      <View style={styles.subContainer}>
        {data.map((item) => (
          <View style={styles.container} key={item.name}>
            <Image
              style={styles.imageContainer}
              source={{ uri: `${item.image}` }}
            />
            <View style={styles.subContainer}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          </View>
        ))}
      </View>
    </>
  );
};

export default Product;
