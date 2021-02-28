import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const hrStyle = StyleSheet.create({
  hr: {
    borderBottomColor: "#FFDD83",
    borderBottomWidth: 3,
    width: "100%",
    marginVertical: 10,
  },
});
