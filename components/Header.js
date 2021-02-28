import React from "react";
import { View, Text } from "react-native";

// Styles
import { headerStyle as styles } from "./../styles/componentStyles";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Campus Recruitment System</Text>
    </View>
  );
}
