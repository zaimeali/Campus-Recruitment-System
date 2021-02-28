import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const authCommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE9CE",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const rootCommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    flex: 0.9,
  },
});
