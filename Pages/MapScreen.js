import React from "react";
import { StyleSheet, View } from "react-native";
import Map from "../components/Map";

//const height = Dimensions.get("window").height;

const MapScreen = ({ navigation }) => {
  return (
    <View>
      <Map></Map>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: "100%",
  },
});

export default MapScreen;
