import React, { Component } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { Svg, Image as ImageSvg } from "react-native-svg";
import Icon from "../assets/Patinhas.svg";
import Boat from "../assets/boat.png";
import { markers } from "../dummyData";
import CostumCallout from "../components/Map/CostumCallout";
import CallOutArrow from "../components/Map/CallOutArrow";
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
import { registerRootComponent } from "expo";
//const height = Dimensions.get("window").height;

class Map extends Component {
  state = {
    latitude: 0,
    longitude: 0,
    errorMessage: "",
    markers: markers,
  };
  constructor(props) {
    super(props);
    this.getLocation();
  }

  async componentDidMount() {}

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
  userMarkerHandler() {
    //console.log(this.props);
    this.props.navigation.navigate("Login");
  }

  renderMarkers = () => {
    this.state.markers.map((item) => (
      <CostumCallout
        title={item.title}
        description={item.description}
        coordinate={item.coordinate}
        image={item.image}
      ></CostumCallout>
    ));
  };

  getLocation = async () => {
    const location = await Location.getCurrentPositionAsync();
    this.setState({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  render() {
    const RederedMarkers = this.state.markers.map((item) => (
      <View key={item.key}>
        <Marker coordinate={item.coordinate}>
          <Callout tooltip>
            <CostumCallout
              title={item.title}
              description={item.description}
              image={item.image}
            ></CostumCallout>
            <CallOutArrow />
          </Callout>
        </Marker>
      </View>
    ));
    const { latitude, longitude } = this.state;
    return (
      <View>
        <MapView
          style={styles.map}
          provider="google"
          //showsUserLocation={true}
          followsUserLocation={true}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.002,
          }}
        >
          {RederedMarkers}
          <Marker
            coordinate={{ latitude: latitude, longitude: longitude }}
            anchor={{ x: 0.5, y: 0.5 }}
            image={Boat}
          >
            <Callout tooltip onPress={() => this.userMarkerHandler()}>
              <View style={styles.bubble}>
                <Text style={styles.username}>Surfista Prateado</Text>
                <View style={styles.profileImage}>
                  <Svg width={100} height={100}>
                    <ImageSvg
                      width={"100%"}
                      height={"100%"}
                      preserveAspectRatio="xMidYMid slice"
                      href={{ uri: "http://lorempixel.com/400/200/" }}
                    />
                  </Svg>
                </View>
              </View>
              <View style={styles.arrowBorder} />
              <View style={styles.arrow} />
            </Callout>
          </Marker>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: "100%",
  },
  bubble: {
    flexDirection: "column",
    backgroundColor: "#ccc",
    padding: 20,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  username: {
    alignSelf: "center",
    marginBottom: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderColor: "#0CF8A1",
    borderRadius: 100,
    borderWidth: 2,
    overflow: "hidden",
    marginHorizontal: 5,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#ccc",
    borderWidth: 16,
    marginTop: -32,
    alignSelf: "center",
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 16,
    marginTop: -0.5,
    alignSelf: "center",
  },
});

export default Map;
