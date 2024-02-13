import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  form: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  emptyList: {
    backgroundColor: "#f8d7da",
    color: "#721c24",
    textAlign: "center",
    fontWeight: "bold",
    padding: 10,
    borderRadius: 5,
    borderColor: "#f5c6cb",
    borderWidth: 2,
    borderStyle: "solid",
    textTransform: "capitalize",
  },
  todo: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  todoText: {
    flex: 1,
    paddingHorizontal: 4,
  },
  todoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 4,
  },
});
