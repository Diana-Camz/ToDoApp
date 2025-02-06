import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const modalCategory = StyleSheet.create({
    modalBackground: {
        marginTop: 280,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 40,
      },
      modalContainer: {
        width: '100%',
        backgroundColor: colorsTheme.lightGray,
        padding: 20,
        marginVertical: 20,
        borderRadius: 10,
        alignItems: 'center',
      },
      itemsContainer: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 3,
        marginVertical: 12,
        borderWidth: 3,
        borderColor: colorsTheme.darkBlue,
        backgroundColor: colorsTheme.darkBlueThird,
      },
      closeContainer: {
        flexDirection: 'row',
        marginLeft: 280,
        marginTop: -20,
      },
      categoryItem: {
        padding: 10,
        width: '100%',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colorsTheme.darkBlue,
      },
      categoryItemSelected: {
        backgroundColor: colorsTheme.lightblue,
      },
})