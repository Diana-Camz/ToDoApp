import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const category = StyleSheet.create({
  container: {
    height: 100,
    width: 180,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    backgroundColor: colorsTheme.lightDark,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: colorsTheme.lightDark,
    elevation: 2,
  },
  container_description: {
    width: 80,
    marginLeft: 12,
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