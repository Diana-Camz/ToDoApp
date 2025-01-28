import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const detail = StyleSheet.create({
    container: {
      height: 500,
      marginTop: 40,
      marginHorizontal: 10,
      justifyContent: 'space-between',
      backgroundColor: colorsTheme.darkBlueThird,
      paddingHorizontal: 20,
      borderRadius: 15,
    }, 
    titleContainer: {
      marginTop: 15,
      alignItems: 'center',
    },
    valuesContainer: {
      marginTop: 15,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 25,
      padding: 10,
    },
    emoji: {
        fontSize: 50,
      },
});