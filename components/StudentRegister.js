import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";

// Styles
import { authCommonStyles as styles } from "./../styles/screenStyles";

export default function StudentRegister({ navigation, userType }) {
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [major, setMajor] = useState("");
  const [currentSemester, setCurrentSemester] = useState("");

  const [errName, setErrName] = useState("");
  const [errRN, setErrRN] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPass, setErrPass] = useState("");
  const [errCGPA, setErrCGPA] = useState("");
  const [errMajor, setErrMajor] = useState("");
  const [errCS, setErrCS] = useState("");

  const onSubmit = () => {
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regexEmail.test(email)) {
      setErrEmail("Email is not in correct format");
    }
    if (password.length < 8) {
      setErrPass("Password length should be 8");
      setPassword("");
    }
    if (name.length < 3) {
      setErrName("Name length should be greater than 8");
    }
    if (rollNumber.length === 0) {
      setErrRN("You forgot to mention your Roll Number");
    }
    if (cgpa.length === 0) {
      setErrCGPA("CGPA is required");
    }
    if (major.length === 0) {
      setErrMajor("Please type major");
    }
    if (currentSemester.length === 0) {
      setErrCS("You forgot to mention current semester");
    }

    if (
      errEmail.length === 0 &&
      errPass.length === 0 &&
      errName.length === 0 &&
      errRN.length === 0 &&
      errCGPA.length === 0 &&
      errMajor.length === 0 &&
      errCS.length === 0
    ) {
      console.log("Very Nice");
    }
  };

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
          paddingVertical: 10,
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
            onFocus={() => {
              setErrName("");
            }}
            onBlur={() => {
              if (name.length === 0) {
                setErrName("Name is required");
              }
            }}
          />
        </View>
        {errName.length !== 0 && (
          <Text style={{ textAlign: "center", color: "red" }}>{errName}</Text>
        )}

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
            secureTextEntry={true}
            onChangeText={(e) => setPassword(e)}
            onFocus={() => {
              setErrPass("");
            }}
            onBlur={() => {
              if (password.length === 0) {
                setErrPass("Password is required");
              }
            }}
          />
        </View>
        {errPass.length !== 0 && (
          <Text style={{ textAlign: "center", color: "red" }}>{errPass}</Text>
        )}

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
            onFocus={() => {
              setErrRN("");
            }}
            onBlur={() => {
              if (rollNumber.length === 0) {
                setErrRN("Roll Number is required");
              }
            }}
          />
        </View>
        {errRN.length !== 0 && (
          <Text style={{ textAlign: "center", color: "red" }}>{errRN}</Text>
        )}

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
            onFocus={() => {
              setErrEmail("");
            }}
            onBlur={() => {
              if (email.length === 0) {
                setErrEmail("Email is required");
              }
            }}
          />
        </View>
        {errEmail.length !== 0 && (
          <Text style={{ textAlign: "center", color: "red" }}>{errEmail}</Text>
        )}

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
            onFocus={() => {
              setErrCGPA("");
            }}
            onBlur={() => {
              if (cgpa.length === 0) {
                setErrCGPA("CGPA is required");
              }
            }}
          />
        </View>
        {errCGPA.length !== 0 && (
          <Text style={{ textAlign: "center", color: "red" }}>{errCGPA}</Text>
        )}

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
            onFocus={() => {
              setErrMajor("");
            }}
            onBlur={() => {
              if (major.length === 0) {
                setErrMajor("Major is required");
              }
            }}
          />
        </View>
        {errMajor.length !== 0 && (
          <Text style={{ textAlign: "center", color: "red" }}>{errMajor}</Text>
        )}

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
            onFocus={() => {
              setErrCS("");
            }}
            onBlur={() => {
              if (currentSemester.length === 0) {
                setErrCS("Company Name is required");
              }
            }}
          />
        </View>
        {errCS.length !== 0 && (
          <Text style={{ textAlign: "center", color: "red" }}>{errCS}</Text>
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
            Register
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Login", {
            userType: userType,
          })
        }
      >
        <Text
          style={{
            color: "#24252A",
          }}
        >
          Have an account?
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
