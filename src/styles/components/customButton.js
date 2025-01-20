import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const customButton = StyleSheet.create({
  container: {
    backgroundColor: colorsTheme.lightblue,
    height: 54,
    width: 328,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    elevation: 5,
    margin: 10,
  },
});
