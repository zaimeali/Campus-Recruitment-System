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
import { authCommonStyles as styles } from "./../styles/screenStyles";

export default function StudentRegister() {
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [major, setMajor] = useState("");
  const [currentSemester, setCurrentSemester] = useState("");

  const onSubmit = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{
          width: 100,
          height: 100,
        }}
        source={require("./../assets/recruitment_1.png")}
      />
      <View
        style={{
          width: Dimensions.get("window").width,
          paddingHorizontal: 20,
          paddingTop: 10,
        }}
      >
        <Text
          style={{
            color: "#4E51BF",
            fontSize: 14,
            textTransform: "uppercase",
            fontWeight: "700",
          }}
        >
          Student
        </Text>
        <Text
          style={{
            color: "#24252A",
            fontSize: 24,
            fontWeight: "700",
          }}
        >
          Create an account
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 5,
            marginTop: 10,
          }}
        >
          <Image
            source={require("./../assets/graduated.png")}
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
            placeholder="Enter Your Name"
            value={name}
            onChangeText={(e) => {
              setName(e);
            }}
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
            source={require("./../assets/padlock.png")}
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

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 5,
          }}
        >
          <Image
            source={require("./../assets/id.png")}
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
            placeholder="Enter your Roll Number"
            onChangeText={(e) => setRollNumber(e)}
            value={rollNumber}
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
            source={require("./../assets/email.png")}
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
            placeholder="Enter Your Email"
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
            source={require("./../assets/score.png")}
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
            placeholder="Enter Your Current GPA"
            value={cgpa}
            onChangeText={(e) => setCgpa(e)}
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
            source={require("./../assets/book.png")}
            style={{
              width: 30,
              height: 30,
              marginRight: 15,
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
            placeholder="Enter Your Major"
            value={major}
            onChangeText={(e) => setMajor(e)}
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
            source={require("./../assets/calendar.png")}
            style={{
              width: 30,
              height: 30,
              marginRight: 15,
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
            placeholder="Enter Your Current Semester"
            value={currentSemester}
            onChangeText={(e) => setCurrentSemester(e)}
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
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
