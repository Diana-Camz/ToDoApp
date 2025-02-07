import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const taskInput = StyleSheet.create({
    container: {
        height: 75,
        borderRadius: 15,
        marginBottom: 10,
        backgroundColor: colorsTheme.darkBlueSecond,
        borderWidth: 2,
        borderColor: colorsTheme.darkBlue,
    },
    descriptionContainer: {
        justifyContent: 'space-between',
        height: 'auto',
        borderRadius: 15,
        marginBottom: 10,
        paddingBottom: 5,
        backgroundColor: colorsTheme.darkBlueSecond, 
        borderWidth: 2, 
        borderColor: colorsTheme.darkBlue, 
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 30,
        paddingHorizontal: 3,
    },
    input: {
        marginHorizontal: 15,
        paddingBottom: 3,
        paddingTop: 11,
        borderBottomWidth: 2,
        borderBottomColor: colorsTheme.darkBlue,
    },
    focusedInput: {
        borderColor: colorsTheme.lightBlueSecond,
    },
    swithContainer: {
        width: '98%',
        marginLeft: 3,
    },
    textContainerStyle: {
        justifyContent: 'flex-start',
        paddingVertical: 0,
        paddingRight: 10,
    },
    textStyle: {
        marginLeft: -10,
    },
    selectedTextStyle: {
        marginLeft: -10,
    },

});