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
import { loginSuccess, setUserDetail } from "../redux/userReducer";

export default function Route() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged((authUser) => {
      console.log("Route.js", authUser);
      if (authUser?.displayName) {
        dispatch(loginSuccess(authUser.displayName));
      } else {
        if (authUser?.email === "admin@admin.com") {
          dispatch(
            setUserDetail({
              email: authUser.email,
            })
          );
          dispatch(loginSuccess("Admin"));
        }
      }
    });
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      {user ? <RootStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
