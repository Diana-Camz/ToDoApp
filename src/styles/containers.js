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
  header: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    marginTop: 15,
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
    marginTop: 10,
  },
  category: {
    paddingLeft: 15,
    marginBlock: 5,
  },
  loader: {
    width: 300,
    height: 300,
    marginTop: 210,
    alignSelf: 'center',
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
  },
  homeSections: {
    marginVertical: 5,
    paddingLeft: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeSectionTask: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end', 
  }
});