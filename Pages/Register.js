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
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faLock, faEye, faAt } from "@fortawesome/free-solid-svg-icons";

const ScreenRegister = ({ navigation }) => {
  const [data, setData] = React.useState({
    username: "",
    password: "",
    passwordConfirmation: "",
    passwordsecureTextEntry: true,
    passwordConfirmationsecureTextEntry: true,
  });

  const handlePasswordChange = (val) => {
    if (data.passwordsecureTextEntry == true) {
      setData({
        ...data,
        password: val,
        passwordsecureTextEntry: false,
      });
    } else {
      setData({
        ...data,
        password: val,
        passwordsecureTextEntry: true,
      });
    }
  };

  const handleConfirmationPasswordChange = (val) => {
    if (data.passwordConfirmationsecureTextEntry == true) {
      setData({
        ...data,
        password: val,
        passwordConfirmationsecureTextEntry: false,
      });
    } else {
      setData({
        ...data,
        password: val,
        passwordConfirmationsecureTextEntry: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={gradient} style={styles.image}>
        <Text style={styles.title}>Skaphandrus</Text>

        <Image style={styles.logo} source={logo} />

        <View style={styles.logContainer}>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon icon={faUser} color="white" />
          </View>
          <TextInput
            placeholder="Username"
            placeholderTextColor="#fff"
            style={styles.input}
          />
        </View>

        <View style={styles.logContainer}>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon icon={faLock} color="white" />
          </View>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#fff"
            style={styles.input}
            secureTextEntry={data.passwordsecureTextEntry}
          />
          <TouchableOpacity onPress={handlePasswordChange}>
            <FontAwesomeIcon icon={faEye} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.logContainer}>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon icon={faLock} color="white" />
          </View>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#fff"
            style={styles.input}
            secureTextEntry={data.passwordConfirmationsecureTextEntry}
          />
          <TouchableOpacity onPress={handleConfirmationPasswordChange}>
            <FontAwesomeIcon icon={faEye} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.logContainer}>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon icon={faAt} color="white" />
          </View>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#fff"
            style={styles.input}
          />
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>

          <Text>Don't have an account? SingIn</Text>
        </View>
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
    fontFamily: "New Times Roman",
    //fontWeight:'bold',
  },
  logo: {
    //backgroundColor:'black',
    marginTop: 50,
    width: 200,
    height: 220,
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderWidth: 3,
    width: "80%",
    minHeight: 30,
    marginTop: 30,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default ScreenRegister;
