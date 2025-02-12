import { StyleSheet } from "react-native";
import { colorsTheme } from "./colorsTheme";

export const containers = StyleSheet.create({
  main: {
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 40,
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
    marginBottom: 5,
  },
  loader: {
    width: 300,
    height: 300,
    marginTop: 210,
    alignSelf: 'center',
},
  addButon: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  task: {
    marginTop: 8,
    marginHorizontal: 12,
    marginBottom: 15,
    padding: 5,
    height: 380,
    borderRadius: 15,
    backgroundColor: colorsTheme.darkBlueThird,
  },
  homeSections: {
    marginTop: 10,
    marginBottom: 5,
    marginRight: 10,
    paddingLeft: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeSectionTask: {
    width: 120,
    marginRight: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  createOrEdit: {
    flex: 1,
    height: "auto",
    marginTop: 40,
    marginHorizontal: 10,
    justifyContent: 'space-between',
    paddingTop: 20,
    backgroundColor: colorsTheme.darkBlueThird,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  categoryList: {
    height: '90%',
  },
});