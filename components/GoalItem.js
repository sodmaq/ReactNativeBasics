import { StyleSheet, View, Text, FlatList } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalsText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalsText: {
    color: "white",
  },
});
