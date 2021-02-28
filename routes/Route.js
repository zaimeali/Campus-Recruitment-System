import React, { useState } from "react";

// RN Navigation
import { NavigationContainer } from "@react-navigation/native";

// Routes
import RootStack from "../navigations/RootStack";
import AuthStack from "../navigations/AuthStack";

export default function Route() {
  const [user, setUser] = useState("");

  return (
    <NavigationContainer>
      {user ? <RootStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
