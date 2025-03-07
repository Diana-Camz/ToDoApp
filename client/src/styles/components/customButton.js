import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const customButton = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  darkContainer: {
    backgroundColor: colorsTheme.dark,
    height: 54,
    width: '40%',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    elevation: 5,
    margin: 10,
    borderWidth: 2,
    borderColor: colorsTheme.blue,
  },

  blueContainer: {
    backgroundColor: colorsTheme.lightBlueSecond,
    height: 54,
    width: '90%',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    elevation: 5,
    margin: 10,
    borderWidth: 2,
    borderColor: colorsTheme.blue,
  }
});
