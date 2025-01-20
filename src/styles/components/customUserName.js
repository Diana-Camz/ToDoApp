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
  marginLeft_logout: {
    marginLeft: 40,
  },
  title_home: {
    color: colorsTheme.white,
    fontSize: 16,
  },
  title: {
    color: colorsTheme.white,
    fontSize: 14,
  },
  welcome_description: {
    color: colorsTheme.lightGraySecond
  },
  logout_text:{
    color: colorsTheme.lightBlueSecond,
  },
});