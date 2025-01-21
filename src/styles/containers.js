import { StyleSheet } from "react-native";
import { colorsTheme } from "./colorsTheme";

export const containers = StyleSheet.create({
  main: {
    paddingHorizontal: 16,
    paddingTop: 40,
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
    height: 55,
    flexDirection: 'row-reverse',
    justifyContent: "flex-start",
    alignItems: 'center',
    margin: 10,
    marginTop: 20,
  },
  category: {
    paddingLeft: 15,
  },
  addButon: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  task: {
    marginTop: 8,
    marginHorizontal: 12,
    padding: 10,
    height: 400,
    borderRadius: 15,
    backgroundColor: colorsTheme.darkBlueThird,
  }
});