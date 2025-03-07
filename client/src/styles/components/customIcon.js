import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const customIcon = StyleSheet.create({
  container: {
    height: 54,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    backgroundColor: colorsTheme.darkBlue,
    height: 70,
    width: 70,
    borderRadius: 15,
  },
});