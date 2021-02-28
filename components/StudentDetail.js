import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// firebase
import firebase from "firebase";

export default function StudentDetail({
  userDetail,
  userRole,
  navigation,
  uid,
}) {
  const { data } = userDetail;

  const onDelete = async () => {
    await firebase
      .firestore()
      .collection("student")
      .doc(uid)
      .delete()
      .then(() => navigation.navigate("Home"))
      .catch((err) => alert(`${err.message}`));
  };

  return (
    <View style={{}}>
      <View>
        <Text
          style={{
            fontSize: 18,
            color: "#24252A",
            padding: 10,
            fontWeight: "700",
          }}
        >
          Student Detail:
        </Text>
        {/* <Image source={require("./../assets/graduated.png")} /> */}
      </View>

      <View
        style={{
          marginTop: 30,
          padding: 10,
          marginBottom: 10,
        }}
      >
        <Text>Name: {data.name}</Text>
        <Text>Email: {data.email}</Text>
        <Text>CGPA: {data.cgpa}</Text>
        <Text>Roll Number: {data.rollNumber}</Text>
        <Text>Current Semester: {data.currentSemester}</Text>
        <Text>Major: {data.major}</Text>
      </View>

      {userRole === "Admin" && (
        <TouchableOpacity
          onPress={() => {
            onDelete();
          }}
          style={{
            backgroundColor: "#4E51BF",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontWeight: "700",
              fontSize: 18,
            }}
          >
            Delete
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
