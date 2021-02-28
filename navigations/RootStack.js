import React from "react";

// RN Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Home from "../screens/root/Home";

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}
