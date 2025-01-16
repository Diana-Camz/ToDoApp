import { StyleSheet } from "react-native";
import { colorsTheme } from "./colorsTheme";

export const containers = StyleSheet.create({
  main: {
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 20,
    flex: 1,
    backgroundColor: colorsTheme.dark,
  },
  userName_home: {
    height: 75,
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: 'center',
    margin: 15,
    marginTop: 40,
  },
  userName: {
    height: 75,
    flexDirection: 'row',
    justifyContent: "flex-end",
    alignItems: 'center',
    margin: 15,
    marginTop: 40,
  },
});