import { StyleSheet } from "react-native";
import { colorsTheme } from "./colorsTheme";

export const containers = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 20,
    flex: 1,
    backgroundColor: colorsTheme.dark,
  },
});