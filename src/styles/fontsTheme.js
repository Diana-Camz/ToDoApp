import { StyleSheet } from "react-native";
import { colorsTheme } from "./colorsTheme";

export const fontsTheme = {
  title: {
    color: colorsTheme.white,
    fontFamily: "OpenSans_600SemiBold",
    textAlign: "left",
  },
  description: {
    color: colorsTheme.lightGraySecond,
    fontFamily: "OpenSans_600SemiBold",
    textAlign: "left",
  },
  inputTitle: {
    color: colorsTheme.darkBlueSecond,
    fontFamily: "OpenSans_600SemiBold",
    textAlign: "left",
  },
  buttons: {
    color: colorsTheme.darkBlueSecond,
    fontFamily: "Manrope_700Bold",
    textAlign: "left",
    fontWeight: '700',
    fontSize: 16,
  },
  opacity50: {
    opacity: 0.5,
  },
  opacity70: {
    opacity: 0.7,
  },
  normal: 15,
};