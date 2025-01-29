import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const taskInput = StyleSheet.create({
    container: {
        height: 70,
        borderRadius: 15,
        marginBottom: 10,
        backgroundColor: colorsTheme.darkBlueSecond,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 35,
    },
    input: {
        marginTop: 5,
        marginHorizontal: 15,
        paddingBottom: 0,
        paddingTop: 0,
        borderBottomWidth: 2,
        borderBottomColor: colorsTheme.darkBlue,
    },

});