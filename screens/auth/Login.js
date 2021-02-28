import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";

// Styles
import { authCommonStyles as styles } from "./../../styles/screenStyles";

export default function Login({ route, navigation }) {
  const { userType } = route.params;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          />
        </View>

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
            placeholder="Enter Password"
            value={password}
            onChangeText={(e) => setPassword(e)}
          />
        </View>

        <TouchableOpacity
          style={{
            width: "100%",
            backgroundColor: "#4E51BF",
            padding: 12,
            borderRadius: 10,
            marginTop: 20,
          }}
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
        onPress={() =>
          navigation.navigate("Register", {
            userType: userType,
          })
        }
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
