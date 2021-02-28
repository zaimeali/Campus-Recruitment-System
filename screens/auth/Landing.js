import React from "react";
import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";

// Styles
import { authCommonStyles as styles } from "./../../styles/screenStyles";

// Components
import HR from "../../components/HR";

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
          paddingTop: 20,
        }}
      >
        <Image
          style={{
            width: 50,
            height: 50,
            marginBottom: 15,
          }}
          source={require("./../../assets/headhunting.png")}
        />
        <Text
          style={{
            fontWeight: "700",
            fontSize: 18,
            color: "#373739",
          }}
        >
          Welcome
        </Text>
        <Text
          style={{
            color: "#373739",
            fontSize: 14,
            fontWeight: "700",
          }}
        >
          to
        </Text>
        <Text
          style={{
            color: "#373739",
            fontSize: 22,
            fontWeight: "700",
          }}
        >
          Campus Recruitment System
        </Text>
        <HR />
        <Pressable
          style={{
            backgroundColor: "#4E51BF",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
          }}
          onPress={() =>
            navigation.navigate("Login", {
              userType: null,
            })
          }
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            Login
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingBottom: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register", {
              userType: "Student",
            });
          }}
          style={{
            flex: 0.35,
            backgroundColor: "#4E51BF",
            padding: 20,
            borderRadius: 10,
            marginLeft: 5,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: 30,
              height: 30,
            }}
            source={require("./../../assets/student.png")}
          />
          <Text
            style={{
              color: "#fff",
              fontWeight: "700",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Are you a Student?
          </Text>
        </TouchableOpacity>
        <View
          style={{
            paddingVertical: 20,
            marginHorizontal: 5,
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 18,
              textAlign: "center",
              color: "#24252A",
            }}
          >
            or
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register", {
              userType: "Recruiter",
            });
          }}
          style={{
            flex: 0.35,
            backgroundColor: "#4E51BF",
            padding: 20,
            borderRadius: 10,
            marginLeft: 5,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: 30,
              height: 30,
            }}
            source={require("./../../assets/school.png")}
          />
          <Text
            style={{
              color: "#fff",
              fontWeight: "700",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Are you a Recruiter?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
