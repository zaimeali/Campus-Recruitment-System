import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Pressable, FlatList } from "react-native";

// Styles
import { rootCommonStyles as styles } from "./../../styles/screenStyles";

// Components
import Header from "../../components/Header";

// Redux
import { useSelector } from "react-redux";

// Firebase
import firebase from "firebase/app";
import "firebase/firestore";

// Components
import HR from "../../components/HR";

export default function Home({ navigation }) {
  const { user, userDetails, uid } = useSelector((state) => state.user);

  const [studentList, setStudentList] = useState({});
  const [recruiterList, setRecruiterList] = useState({});

  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const getData = async (collection) => {
      const snapshot = await firebase.firestore().collection(collection).get();
      let documents = [];
      snapshot.forEach((doc) => {
        documents.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      return documents;
    };
    if (user === "Admin") {
      let listData = getData("student")
        .then((data) => setStudentList(data))
        .catch((err) => console.error(err));
      listData = getData("recruiter")
        .then((data) => setRecruiterList(data))
        .catch((err) => console.error(err));
    }
    if (recruiterList.length === 0) {
      setRecruiterList([{ data: { name: "No Recruiter Found" } }]);
    }
    if (studentList.length === 0) {
      setStudentList([{ data: { name: "No Student Found" } }]);
    }

    const checkDataExist = async () => {
      const userRef = await firebase
        .firestore()
        .collection("student")
        .doc(`${uid}`)
        .get()
        .then((docSnapShot) => {
          if (docSnapShot.exists) {
            setUserRole("Student");
            let listData = getData("recruiter")
              .then((data) => setRecruiterList(data))
              .catch((err) => console.error(err));
            return;
          }
          firebase
            .firestore()
            .collection("recruiter")
            .doc(`${uid}`)
            .get()
            .then((doc) => {
              if (doc.exists) {
                setUserRole("Recruiter");
                let listData = getData("student")
                  .then((data) => setStudentList(data))
                  .catch((err) => console.error(err));
                return;
              }
            });
        });
    };

    checkDataExist();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.body}>
        {user === "Admin" && (
          <View>
            <View
              style={{
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: "#24252A",
                  fontSize: 22,
                  fontWeight: "700",
                  textTransform: "capitalize",
                }}
              >
                Recruiters:
              </Text>
              <HR />
              <FlatList
                horizontal
                data={recruiterList}
                keyExtractor={(item, index) => `${index}`}
                style={{
                  backgroundColor: "#FFE9CE",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                }}
                renderItem={({ item }) => {
                  return (
                    <Pressable
                      key={item.id}
                      style={{
                        backgroundColor: "#4E51BF",
                        marginRight: 10,
                        padding: 20,
                        borderRadius: 5,
                      }}
                      onPress={() => {
                        navigation.navigate("Detail", {
                          userDetail: item,
                          userType: "Recruiter",
                          userRole: "Admin",
                        });
                      }}
                    >
                      <Text
                        style={{
                          color: "#F4F5FE",
                          fontWeight: "700",
                          fontSize: 16,
                        }}
                      >
                        {item.data.companyName}
                      </Text>
                    </Pressable>
                  );
                }}
              />
            </View>
            <View
              style={{
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  color: "#24252A",
                  fontSize: 22,
                  fontWeight: "700",
                  textTransform: "capitalize",
                }}
              >
                Students:
              </Text>
              <HR />
              <FlatList
                horizontal
                data={studentList}
                keyExtractor={(item, index) => `${index}`}
                style={{
                  backgroundColor: "#FFE9CE",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                }}
                renderItem={({ item }) => {
                  return (
                    <Pressable
                      key={item.id}
                      style={{
                        backgroundColor: "#4E51BF",
                        marginRight: 10,
                        padding: 20,
                        borderRadius: 5,
                      }}
                      onPress={() => {
                        navigation.navigate("Detail", {
                          userDetail: item,
                          userType: "Student",
                          userRole: "Admin",
                        });
                      }}
                    >
                      <Text
                        style={{
                          color: "#F4F5FE",
                          fontWeight: "700",
                          fontSize: 16,
                        }}
                      >
                        {item.data.name}
                      </Text>
                    </Pressable>
                  );
                }}
              />
            </View>
          </View>
        )}

        {userRole === "Student" && (
          <View>
            <View
              style={{
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: "#24252A",
                  fontSize: 22,
                  fontWeight: "700",
                  textTransform: "capitalize",
                }}
              >
                Recruiters:
              </Text>
              <HR />
              <FlatList
                horizontal
                data={recruiterList}
                keyExtractor={(item, index) => `${index}`}
                style={{
                  backgroundColor: "#FFE9CE",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                }}
                renderItem={({ item }) => {
                  return (
                    <Pressable
                      key={item.id}
                      style={{
                        backgroundColor: "#4E51BF",
                        marginRight: 10,
                        padding: 20,
                        borderRadius: 5,
                      }}
                      onPress={() => {
                        navigation.navigate("Detail", {
                          userDetail: item,
                          userType: "Recruiter",
                          userRole: "Student",
                        });
                      }}
                    >
                      <Text
                        style={{
                          color: "#F4F5FE",
                          fontWeight: "700",
                          fontSize: 16,
                        }}
                      >
                        {item.data.companyName}
                      </Text>
                    </Pressable>
                  );
                }}
              />
            </View>
          </View>
        )}

        {userRole === "Recruiter" && (
          <View>
            <View
              style={{
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  color: "#24252A",
                  fontSize: 22,
                  fontWeight: "700",
                  textTransform: "capitalize",
                }}
              >
                Students:
              </Text>
              <HR />
              <FlatList
                horizontal
                data={studentList}
                keyExtractor={(item, index) => `${index}`}
                style={{
                  backgroundColor: "#FFE9CE",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                }}
                renderItem={({ item }) => {
                  return (
                    <Pressable
                      key={item.id}
                      style={{
                        backgroundColor: "#4E51BF",
                        marginRight: 10,
                        padding: 20,
                        borderRadius: 5,
                      }}
                      onPress={() => {
                        navigation.navigate("Detail", {
                          userDetail: item,
                          userType: "Student",
                          userRole: "Recruiter",
                        });
                      }}
                    >
                      <Text
                        style={{
                          color: "#F4F5FE",
                          fontWeight: "700",
                          fontSize: 16,
                        }}
                      >
                        {item.data.name}
                      </Text>
                    </Pressable>
                  );
                }}
              />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
