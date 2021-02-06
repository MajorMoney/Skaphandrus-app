import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import gradient from "../assets/gradientv2.png";
import logo from "../assets/logo_skaphandrus.png";

const MainMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={gradient} style={styles.image}>
        <Text style={styles.title}>Skaphandrus</Text>

        <Image style={styles.logo} source={logo} />
        <TouchableOpacity
          style={styles.btn}
          placeholderTextColor="#fff"
          onPress={() => console.log("Game 1")}
        >
          <Text style={styles.btnText}>Game 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          placeholderTextColor="#fff"
          onPress={() => navigation.navigate("MapScreen")}
        >
          <Text style={styles.btnText}>MAP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Logout}
          placeholderTextColor="#fff"
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.btnText}>Logout</Text>
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
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 3,
    width: "80%",
    height: 100,
    minHeight: 30,
    marginTop: 30,
    textAlign: "center",
    justifyContent: "center",
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
    borderRadius: 10,
    paddingVertical: 10,
    borderWidth: 3,
    width: "80%",
    height: 100,
    minHeight: 30,
    marginTop: 30,
    justifyContent: "center",
  },
});
export default MainMenu;
