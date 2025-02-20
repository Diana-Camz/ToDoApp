import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const customDetailField = StyleSheet.create({
    container: {
        width: 300,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        marginTop: 10,
        paddingLeft: 15,
        paddingRight: 50,
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
});