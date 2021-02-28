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

export default function RecruiterRegister({ navigation, userType }) {
  const [companyName, setCompanyName] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [careerEmail, setCareerEmail] = useState("");
  const [address, setAddress] = useState("");
  const [numEmployess, setNumEmployess] = useState("");

  const onSubmit = () => {};

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
              //   backgroundColor: "#F4F5FE",
              //   borderRadius: 5,
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
              //   backgroundColor: "#F4F5FE",
              //   borderRadius: 5,
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
              backgroundColor: "#FFDD83",
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
              backgroundColor: "#FFDD83",
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
              backgroundColor: "#FFDD83",
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
