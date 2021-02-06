import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ScreenLogin from "./Pages/Login";
import ScreenRegister from "./Pages/Register";
import ScreenMainMenu from "./Pages/MainMenu";
import MapScreen from "./Pages/MapScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={ScreenLogin} />
        <Drawer.Screen name="Register" component={ScreenRegister} />
        <Drawer.Screen name="MainMenu" component={ScreenMainMenu} />
        <Drawer.Screen name="MapScreen" component={MapScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
