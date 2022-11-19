import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

function GoalItem({ text, onDeleteGoal }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedItem}
        android_ripple={{ color: "#ddds" }}
        onPress={onDeleteGoal}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
