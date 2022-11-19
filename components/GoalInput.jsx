import React, { useState } from "react";
import {
  Image,
  View,
  Button,
  TextInput,
  StyleSheet,
  Modal,
  Text,
} from "react-native";

const GoalInput = ({ onAddGoal, visible, modalAddGoalHandler }) => {
  const [error, setError] = useState(false);
  const [enteredText, setEnteredText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function addGoalHandler() {
    if (enteredText.trim().length > 0) {
      onAddGoal(enteredText);
      setEnteredText("");
      modalAddGoalHandler();
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="your course goal"
          value={enteredText}
        />
        {error && (
          <View>
            <Text style={{ color: "red" }}>Please enter some text!</Text>
          </View>
        )}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="#f31282"
              onPress={() => {
                setError(false);
                modalAddGoalHandler();
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={addGoalHandler}
              color="#b180f0"
              title="Add Goal!"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    color: "#120438",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
