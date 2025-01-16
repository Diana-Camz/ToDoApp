import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const customUserName = StyleSheet.create({
  image:{
    flex: 1,
    width: 75,
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: colorsTheme.darkBlue,
  },
  container_name: {
    marginLeft: 10,
  },
  container_logout: {
    marginLeft: 40,
  },
  title: {
    color: colorsTheme.white
  },
  welcome_description: {
    color: colorsTheme.lightGraySecond
  },
  logout_text:{
    color: colorsTheme.lightBlueSecond,
  },
});