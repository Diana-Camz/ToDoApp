import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const emojiModal = StyleSheet.create({
    modalBackground: {
        marginTop: 50,
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 40,
      },
      modalContainer: {
        width: '100%',
        backgroundColor: colorsTheme.lightGray,
        paddingHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
      },
      closeContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      closeIcon: {
        marginLeft: 130,
        marginRight: -10,
      },
      emojiContainer: {
        paddingBottom: 50,
        height: 400,
      }
    })