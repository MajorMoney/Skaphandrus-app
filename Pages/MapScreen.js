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

const ScreenMap = ({ navigation }) => {
  return (
    <MapView
      //customMapStyle={styles.map}
      provider="google"
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    ></MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: "100%",
  },
});

export default ScreenMap;
