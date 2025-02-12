import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const task = StyleSheet.create({
    basicContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ellipseContainer: {
        width: 50,
        alignItems: 'center'
    }, 
    taskContainer: {
        backgroundColor: colorsTheme.darkBlueSecond,
        margin: 5,
        borderRadius: 20,
    },
    descriptionContainer: {
        justifyContent: 'flex-start',
        paddingHorizontal: 5,
        width: 200,
    },
    textContainer: {
        width: '80%',
        marginHorizontal: 7,
    },
    emoji: {
        fontSize: 25,
    },
});