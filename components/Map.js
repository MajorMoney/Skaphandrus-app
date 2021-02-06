import React, { Component } from "react";
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

import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
//const height = Dimensions.get("window").height;

class Map extends Component {
  constructor(props) {
    super(props);
    this.getLocation();
  }

  state = {
    latitude: 0,
    longitude: 0,
    errorMessage: "",
  };
  /**/
  getLocation = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);

      console.log(status);
      if (status !== "granted") {
        this.setState({
          errorMessage: "Permission to acess location was denied",
        });
      }
      const location = await Location.getCurrentPositionAsync();
      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;

      console.log(location);

      this.setState({ longitude, latitude });
    } catch (error) {}
  };

  render() {
    return (
      <MapView
        style={styles.map}
        provider="google"
        region={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.002,
        }}
      ></MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: "100%",
  },
});

export default Map;
