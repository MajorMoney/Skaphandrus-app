import React from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
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
