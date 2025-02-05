import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const create = StyleSheet.create({
    container: {
      height: 500,
      marginTop: 40,
      marginHorizontal: 10,
      justifyContent: 'space-between',
      paddingTop: 20,
      backgroundColor: colorsTheme.darkBlueThird,
      paddingHorizontal: 20,
      borderRadius: 15,
    }, 

});