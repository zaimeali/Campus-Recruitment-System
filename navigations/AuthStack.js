import React from "react";

// RN Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Login from "../screens/auth/Login";
import Landing from "../screens/auth/Landing";
import Register from "../screens/auth/Register";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}
