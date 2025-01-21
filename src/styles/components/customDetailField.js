import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";
import { fontsTheme } from "../fontsTheme";

export const customDetailField = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        paddingLeft: 15,
    },
    descriptionContainer: {
        flexDirection: 'column',
        marginTop: 5,
        paddingLeft: 15,
    },
    textContainer: {
        height: 90,
        marginTop:5,
        padding: 10,
        backgroundColor: colorsTheme.lightDark,
        borderWidth: 1,
        borderRadius: 11,
        borderColor: colorsTheme.lightGray,
    },
    title: {
        color: colorsTheme.lightGraySecond,
        fontSize: 16,
      },
    value: {
        fontSize: fontsTheme.normal,
        color: colorsTheme.white
    }, 
    red: {
        fontSize: fontsTheme.normal,
        color: colorsTheme.red,
    },
    yellow: {
        fontSize: fontsTheme.normal,
        color: colorsTheme.yellow,
    },
    green: {
        fontSize: fontsTheme.normal,
        color: colorsTheme.green,
    }
});