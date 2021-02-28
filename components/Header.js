import React, { useState } from "react";
import { View, Text, Pressable, Modal, Alert } from "react-native";

// Redux
import { useSelector, useDispatch } from "react-redux";

// firebase
import firebase from "firebase";

// Styles
import { headerStyle as styles } from "./../styles/componentStyles";
import { logoutSuccess } from "../redux/userReducer";

export default function Header() {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Campus Recruitment System</Text>
      <Pressable
        style={{
          position: "absolute",
          top: 47,
          right: 15,
          backgroundColor: "#fff",
          borderRadius: 30,
          width: 30,
          height: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text>{user[0]}</Text>
      </Pressable>
      <Modal
        visible={isOpen}
        onRequestClose={() => {
          setIsOpen(!isOpen);
        }}
        animationType="slide"
        transparent={true}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
          }}
        >
          <View
            style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 10,
              padding: 60,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Pressable
              style={{
                position: "absolute",
                top: 15,
                right: 15,
                width: 25,
                height: 25,
                backgroundColor: "#FFDD83",
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => setIsOpen(!isOpen)}
            >
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 14,
                }}
              >
                X
              </Text>
            </Pressable>
            <Pressable
              style={[
                {
                  borderRadius: 10,
                  padding: 10,
                  elevation: 2,
                },
                {
                  backgroundColor: "#4E51BF",
                },
              ]}
              onPress={() => {
                firebase
                  .auth()
                  .signOut()
                  .then(() => {
                    dispatch(logoutSuccess());
                  })
                  .catch((err) => Alert.alert("", `${err.message}`));
                setIsOpen(!isOpen);
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Log Out
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
