import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import ScreenLogin from "./Pages/Login";
import ScreenRegister from "./Pages/Register";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={ScreenLogin} />
        <Stack.Screen name="Register" component={ScreenRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
