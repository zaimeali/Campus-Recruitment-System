import React from "react";
import { View, Text, Pressable } from "react-native";

export default function RecruiterDetail({ userDetail, userRole }) {
  const { data } = userDetail;

  if (data.numEmployess === "<5") {
    data.numEmployess = "Less than 5";
  } else if (data.numEmployess === "<15") {
    data.numEmployess = "Less than 15";
  } else if (data.numEmployess === ">15") {
    data.numEmployess = "More than 15";
  }

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
          Recruiter Detail:
        </Text>
      </View>

      <View
        style={{
          marginTop: 30,
          padding: 10,
          marginBottom: 10,
        }}
      >
        <Text>Company Name: {data.companyName}</Text>
        <Text>Company Description: {data.description}</Text>
        <Text>Career Email: {data.careerEmail}</Text>
        <Text>Address: {data.address}</Text>
        <Text>Number of Employees: {data.numEmployess}</Text>
      </View>

      {userRole === "Admin" && (
        <Pressable
          style={{
            backgroundColor: "#4E51BF",
            padding: 10,
            borderRadius: 10,
          }}
          onPress={() => {
            Alert.alert("", "Will be deleted");
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
        </Pressable>
      )}
    </View>
  );
}
