import React from "react";

// RN Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Home from "../screens/root/Home";
import Detail from "../screens/root/Detail";

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}
