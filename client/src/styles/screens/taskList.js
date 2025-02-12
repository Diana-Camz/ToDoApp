import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const taskList = StyleSheet.create({
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
    buttonContainer: {
      marginTop: 50,
      marginHorizontal: 10,
      alignItems: 'center',
    }

});