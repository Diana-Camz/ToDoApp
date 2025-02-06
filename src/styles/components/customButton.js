import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const customButton = StyleSheet.create({
  container: {
    backgroundColor: colorsTheme.dark,
    height: 54,
    width: 328,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    elevation: 5,
    margin: 10,
    borderWidth: 2,
    borderColor: colorsTheme.blue,
  },
});
