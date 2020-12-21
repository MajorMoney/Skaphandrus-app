import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ScreenLogin from "./Pages/Login";
import ScreenRegister from "./Pages/Register";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={ScreenLogin} />
        <Drawer.Screen name="Register" component={ScreenRegister} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
