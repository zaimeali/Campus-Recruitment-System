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
import { authCommonStyles as styles } from "./../styles/screenStyles";

// Firebase
import firebase from "firebase";

// Redux
import { useDispatch } from "react-redux";
import { registerSuccess, setUID, setUserDetail } from "../redux/userReducer";

export default function RecruiterRegister({ navigation, userType }) {
  const dispatch = useDispatch();

  const [companyName, setCompanyName] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [careerEmail, setCareerEmail] = useState("");
  const [address, setAddress] = useState("");
  const [numEmployess, setNumEmployess] = useState("");

  const [errCname, setErrCname] = useState("");
  const [errPass, setErrPass] = useState("");
  const [errDes, setErrDes] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errAddress, setErrAddress] = useState("");

  const onSubmit = () => {
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regexEmail.test(careerEmail)) {
      setErrEmail("Email is not in correct format");
    }
    if (password.length < 8) {
      setErrPass("Password length should be 8");
      setPassword("");
    }
    if (description.length === 0) {
      setErrDes("Description is required");
    }
    if (address.length === 0) {
      setErrAddress("Address is required");
    }
    if (companyName.length === 0 || companyName.length < 3) {
      setErrCname("Company Name is required");
    }

    const registerUser = async (uid) => {
      await firebase
        .firestore()
        .collection("recruiter")
        .doc(uid)
        .set({
          companyName: companyName,
          description: description,
          careerEmail: careerEmail,
          address: address,
          numEmployess: numEmployess,
        })
        .then(() => {
          dispatch(setUID(uid));
          dispatch(
            setUserDetail({
              companyName: companyName,
              description: description,
              careerEmail: careerEmail,
              address: address,
              numEmployess: numEmployess,
            })
          );
          dispatch(registerSuccess(companyName));
        })
        .catch((err) => Alert.alert("", `${err.message}`));
    };

    if (
      errCname.length === 0 &&
      errAddress.length === 0 &&
      errDes.length === 0 &&
      errEmail.length === 0 &&
      errPass.length === 0
    ) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(careerEmail, password)
        .then((authUser) => {
          authUser.user.updateProfile({
            displayName: companyName,
          });
          registerUser(authUser.user.uid);
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
        source={require("./../assets/recruitment_2.png")}
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
          Company
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
            source={require("./../assets/office-building.png")}
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
            placeholder="Enter Company Name"
            value={companyName}
            onChangeText={(e) => {
              setCompanyName(e);
            }}
            onFocus={() => {
              setErrCname("");
            }}
            onBlur={() => {
              if (companyName.length === 0) {
                setErrCname("Company Name is required");
              }
            }}
          />
        </View>
        {errCname.length !== 0 && (
          <Text style={{ textAlign: "center", color: "red" }}>{errCname}</Text>
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
            secureTextEntry={true}
            placeholder="Enter Password"
            value={password}
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
            source={require("./../assets/policy.png")}
            style={{
              width: 30,
              height: 30,
              marginRight: 5,
            }}
          />
          <TextInput
            style={{
              width: "85%",
              //   backgroundColor: "#F4F5FE",
              //   borderRadius: 5,
              marginLeft: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#24252A",
              paddingVertical: 5,
            }}
            multiline
            numberOfLines={4}
            placeholder="Enter Company Description"
            onChangeText={(e) => setDescription(e)}
            value={description}
            onFocus={() => {
              setErrDes("");
            }}
            onBlur={() => {
              if (description.length === 0) {
                setErrDes("Description is required");
              }
            }}
          />
        </View>
        {errDes.length !== 0 && (
          <Text style={{ textAlign: "center", color: "red" }}>{errDes}</Text>
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
              //   backgroundColor: "#F4F5FE",
              //   borderRadius: 5,
              marginLeft: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#24252A",
              paddingVertical: 5,
            }}
            placeholder="Enter Company Career Email"
            value={careerEmail}
            onChangeText={(e) => setCareerEmail(e)}
            onFocus={() => {
              setErrEmail("");
            }}
            onBlur={() => {
              if (description.length === 0) {
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
            source={require("./../assets/address.png")}
            style={{
              width: 30,
              height: 30,
              marginRight: 5,
            }}
          />
          <TextInput
            style={{
              width: "85%",
              //   backgroundColor: "#F4F5FE",
              //   borderRadius: 5,
              marginLeft: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#24252A",
              paddingVertical: 5,
            }}
            multiline
            numberOfLines={3}
            placeholder="Enter Company Address"
            value={address}
            onChangeText={(e) => setAddress(e)}
            onFocus={() => {
              setErrAddress("");
            }}
            onBlur={() => {
              if (description.length === 0) {
                setErrAddress("Address is required");
              }
            }}
          />
        </View>
        {errAddress.length !== 0 && (
          <Text style={{ textAlign: "center", color: "red" }}>
            {errAddress}
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
            source={require("./../assets/team.png")}
            style={{
              width: 30,
              height: 30,
              marginRight: 15,
            }}
          />
          <TouchableOpacity
            style={{
              marginRight: 10,
              backgroundColor: numEmployess === "<5" ? "#FFDD83" : "#F4F5FE",
              paddingHorizontal: 5,
              paddingVertical: 10,
              borderRadius: 5,
            }}
            onPress={() => setNumEmployess("<5")}
          >
            <Text
              style={{
                color: "#24252A",
              }}
            >
              Less than 5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight: 10,
              backgroundColor: numEmployess === "<15" ? "#FFDD83" : "#F4F5FE",
              paddingHorizontal: 5,
              paddingVertical: 10,
              borderRadius: 5,
            }}
            onPress={() => setNumEmployess("<15")}
          >
            <Text
              style={{
                color: "#24252A",
              }}
            >
              Less than 15
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: numEmployess === ">15" ? "#FFDD83" : "#F4F5FE",
              paddingHorizontal: 5,
              paddingVertical: 10,
              borderRadius: 5,
            }}
            onPress={() => setNumEmployess(">15")}
          >
            <Text
              style={{
                color: "#24252A",
              }}
            >
              More than 15
            </Text>
          </TouchableOpacity>
        </View>

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
