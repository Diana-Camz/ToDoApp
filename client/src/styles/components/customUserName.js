import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";
import { fontsTheme } from "../fontsTheme";

export const customUserName = StyleSheet.create({
  image_home:{
    flex: 1,
    width: 75,
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 5,
    borderColor: colorsTheme.darkBlue,
  },
  image:{
    flex: 1,
    width: 55,
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: colorsTheme.darkBlue,
  },
  mgL: {
    marginLeft: 30,
  },
  welcome_description: {
    color: colorsTheme.lightGraySecond
  },
});