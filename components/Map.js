import React, { Component } from "react";
import MapView, { Marker } from "react-native-maps";
import Boat from "../assets/boat.png";
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
  state = {
    region: null,
    errorMessage: "",
  };
  constructor(props) {
    super(props);
    this.getLocation();
  }

  async componentDidMount() {
    //this.getLocation();
  }

  /**/

  /* getStatus = async () => {
    this.setState({
      currentStatus: await Permissions.getAsync(Permissions.LOCATION),
    });
  };

  /*askPermission = async () => {
    try {
      if (this.state.currentStatus !== "granted") {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);

        if (status === "granted") {
        } else {
          this.setState({
            errorMessage: "Location permission not granted",
          });
          throw new Error();
        }
      }
    } catch (error) {
      this.props.navigation.goBack();
      alert(this.state.errorMessage);
    }
  };*/

  getLocation = async () => {
    //if (status === "granted") {
    const location = await Location.getCurrentPositionAsync();
    this.setState({
      region: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.002,
      },
    });
    //}
  };

  render() {
    console.log(this.state.region);
    const { region, latitude, longitude } = this.state;
    console.log(this.state.region);
    //const { latitude, longitude } = region;
    //console.log(latitude);
    //console.log(longitude);
    return (
      <View>
        <MapView
          style={styles.map}
          provider="google"
          //showsUserLocation={true}
          followsUserLocation={true}
          region={region}
        >
          <Marker
            title="User"
            description="descrição á toa"
            coordinate={{
              latitude: 38.5817508,
              longitude: -8.9016856,
            }}
            image={Boat}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: "100%",
  },
});

export default Map;
