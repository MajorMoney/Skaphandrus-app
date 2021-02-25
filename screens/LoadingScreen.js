import React, { useEffect } from "react";
import { Text, View, StyleSheet, Animated, Image } from "react-native";

import logo from "../assets/logo_skaphandrus.png";

const LoadingScreen = ({ navigation }) => {
  const [state, setState] = React.useState({
    LogoAnime: new Animated.Value(0),
    LogoText: new Animated.Value(0),
    loadingSpinner: false,
  });

  useEffect(() => {
    const { LogoAnime, LogoText } = state;
    Animated.parallel([
      Animated.spring(LogoAnime, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 1000,
        useNativeDriver: false,
      }).start(),

      Animated.timing(LogoText, {
        toValue: 1,
        duration: 12000,
        useNativeDriver: false,
      }),
    ]).start(() => {
      setState({
        ...state,
        loadingSpinner: true,
      });
    });
    setTimeout(() => {
      navigation.navigate("Login");
    }, 5000);
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          opacity: state.LogoAnime,
          top: state.LogoAnime.interpolate({
            inputRange: [0, 1],
            outputRange: [80, 0],
          }),
        }}
      >
        <Image style={styles.logo} source={logo} />
        <Text style={styles.text}>Skaphandrus</Text>
        <Text style={styles.textBeagle}>Powered by beagle</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1af394",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
  textBeagle: {
    color: "black",
    fontSize: 15,
    textAlign: "center",
    paddingTop: 20,
  },
  logo: {
    marginTop: -150,
    width: 200,
    height: 220,
  },
});

export default LoadingScreen;
