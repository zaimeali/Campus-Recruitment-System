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

export const headerStyle = StyleSheet.create({
  container: {
    backgroundColor: "#4E51BF",
    width: WIDTH,
    height: 100,
    justifyContent: "flex-end",
    paddingBottom: 20,
    alignItems: "center",
    flex: 0.1,
  },
  heading: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
});
