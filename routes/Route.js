import React, { useState, useEffect } from "react";

// RN Navigation
import { NavigationContainer } from "@react-navigation/native";

// Routes
import RootStack from "../navigations/RootStack";
import AuthStack from "../navigations/AuthStack";

// Firebase
import firebase from "firebase";

// Redux
import { useDispatch, useSelector } from "react-redux";

export default function Route() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged((authUser) => {
      console.log(authUser);
    });
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      {user ? <RootStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
