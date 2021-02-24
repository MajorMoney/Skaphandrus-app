import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ScreenLogin from "./screens/Login/Login";
import ScreenRegister from "./screens/Register";
import ScreenMainMenu from "./screens/MainMenu";
import MapScreen from "./screens/MapScreen";
import ProfileScreen from "./screens/Profile";

const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login">
          <Drawer.Screen name="Login" component={ScreenLogin} />
          <Drawer.Screen name="Register" component={ScreenRegister} />
          <Drawer.Screen name="MainMenu" component={ScreenMainMenu} />
          <Drawer.Screen name="MapScreen" component={MapScreen} />
          <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
