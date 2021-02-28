import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  Alert,
} from "react-native";

// Styles
import { authCommonStyles as styles } from "./../../styles/screenStyles";

// firebase
import firebase from "firebase";

// redux
import { useDispatch } from "react-redux";
import { loginSuccess, setUID } from "../../redux/userReducer";

export default function Login({ route, navigation }) {
  const { userType } = route.params;

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const onSubmit = () => {
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regexEmail.test(email)) {
      setErrorEmail("Email is not in correct format");
    }
    if (password.length < 8) {
      setErrorPassword("Password length should be 8");
      setPassword("");
    }
    if (errorEmail.length === 0 && errorPassword.length === 0) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((authUser) => {
          dispatch(loginSuccess(authUser.user.displayName));
          dispatch(setUID(authUser.user.uid));
        })
        .catch((err) => Alert.alert("", `${err.message}`));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{
          width: 100,
          height: 100,
        }}
        source={require("./../../assets/agency.png")}
      />

      <View
        style={{
          width: Dimensions.get("window").width,
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            color: "#24252A",
            fontSize: 24,
            fontWeight: "700",
          }}
        >
          Log into your account
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 5,
          }}
        >
          <Image
            source={require("./../../assets/email.png")}
            style={{
              width: 30,
              height: 30,
              marginRight: 5,
            }}
          />
          <TextInput
            style={{
              width: "85%",
              marginLeft: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#24252A",
              paddingVertical: 5,
            }}
            placeholder="Enter Email"
            value={email}
            onChangeText={(e) => setEmail(e)}
            onFocus={() => {
              setErrorEmail("");
            }}
            onBlur={() => {
              if (email.length === 0) {
                setErrorEmail("Email is required");
              }
            }}
          />
        </View>
        {errorEmail.length !== 0 && (
          <Text
            style={{
              textAlign: "center",
              color: "red",
            }}
          >
            {errorEmail}
          </Text>
        )}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 5,
          }}
        >
          <Image
            source={require("./../../assets/padlock.png")}
            style={{
              width: 30,
              height: 30,
              marginRight: 5,
            }}
          />
          <TextInput
            style={{
              width: "85%",
              marginLeft: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#24252A",
              paddingVertical: 5,
            }}
            secureTextEntry={true}
            placeholder="Enter Password"
            value={password}
            onChangeText={(e) => setPassword(e)}
            onFocus={() => {
              setErrorPassword("");
            }}
            onBlur={() => {
              if (password.length === 0) {
                setErrorPassword("Password is required");
              }
            }}
          />
        </View>
        {errorPassword.length !== 0 && (
          <Text
            style={{
              textAlign: "center",
              color: "red",
            }}
          >
            {errorPassword}
          </Text>
        )}

        <TouchableOpacity
          style={{
            width: "100%",
            backgroundColor: "#4E51BF",
            padding: 12,
            borderRadius: 10,
            marginTop: 20,
          }}
          onPress={() => onSubmit()}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {
          if (userType !== null) {
            navigation.navigate("Register", {
              userType: userType,
            });
          } else {
            navigation.navigate("Landing");
          }
        }}
      >
        <Text
          style={{
            color: "#24252A",
          }}
        >
          Don't have an account?
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
