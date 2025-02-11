import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const selCategory = StyleSheet.create({
  container: {
    height: 160,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    backgroundColor: colorsTheme.lightDark,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: colorsTheme.lightDark,
    elevation: 2,
  },
  containerSelected: {
    height: 160,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    backgroundColor: colorsTheme.lightGray,
    borderRadius: 17,
    borderWidth: 2,
    borderColor: colorsTheme.lightblue,
    elevation: 2,
  },
  image:{
    width: 55,
    height:55,
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: colorsTheme.darkBlue,
  },
});