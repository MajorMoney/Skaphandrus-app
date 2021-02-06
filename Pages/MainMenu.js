import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faUser,
  faGamepad,
  faWater,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const MainMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/aaa.jpg")}
        style={styles.image}
      >
        <TouchableOpacity
          style={styles.btn}
          placeholderTextColor="#fff"
          onPress={() => console.log("Profile")}
        >
          <FontAwesomeIcon icon={faUser} color="white" size={50} />
          <Text style={styles.btnText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          placeholderTextColor="#fff"
          onPress={() => navigation.navigate("MapScreen")}
        >
          <FontAwesomeIcon icon={faGamepad} color="white" size={50} />
          <Text style={styles.btnText}>Game</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          placeholderTextColor="#fff"
          onPress={() => console.log("Explore")}
        >
          <FontAwesomeIcon icon={faWater} color="white" size={50} />
          <Text style={styles.btnText}>Explore</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          placeholderTextColor="#fff"
          onPress={() => navigation.navigate("Login")}
        >
          <FontAwesomeIcon icon={faCog} color="white" size={50} />
          <Text style={styles.btnText}>Setings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Logout}
          placeholderTextColor="#fff"
          onPress={() => navigation.navigate("Login")}
        >
          <FontAwesomeIcon icon={faSignOutAlt} color="white" size={10} />

          <Text style={styles.btnTextLogout}>Logout</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:'#1af394',
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    padding: 20,
    fontSize: 50,
    color: "#fff",
    position: "absolute",
    top: 10,
    //fontWeight:'bold',
  },
  logo: {
    //backgroundColor:'black',
    width: 200,
    height: 220,
    alignItems: "center",
    justifyContent: "center",
  },
  logContainer: {
    width: "80%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
    minHeight: 50,
  },
  iconContainer: {
    color: "white",
  },
  icon: {},
  input: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    width: "100%",
    padding: 10,
    textShadowColor: "#fff",
  },
  btnContainer: {
    width: "80%",
    alignItems: "center",
  },
  btn: {
    //backgroundColor: "" /* Green */,
    borderColor: "white",
    borderRadius: 100,
    borderWidth: 3,
    width: 120,
    height: 120,
    marginTop: 50,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  Logout: {
    //backgroundColor: "" /* Green */,
    borderColor: "white",
    borderRadius: 100,
    borderWidth: 3,
    width: 50,
    height: 50,
    marginTop: 50,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTextLogout: {
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 10,
    fontWeight: "bold",
  },
});
export default MainMenu;
