import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";

// Styles
import { rootCommonStyles as styles } from "./../../styles/screenStyles";

// Components
import Header from "../../components/Header";

export default function Home() {
  const [userType, setUserType] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Text>Nice</Text>
      </View>
    </SafeAreaView>
  );
}
