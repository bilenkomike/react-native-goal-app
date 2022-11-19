import { StyleSheet, View, Button, FlatList } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [coarseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredText) {
    setCourseGoals((prevState) => {
      return [
        ...prevState,
        { text: enteredText, id: Math.random().toString() },
      ];
    });
  }

  const modalAddGoalHandler = () => {
    setModalIsVisible(!modalIsVisible);
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  // const list
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new Goal"
          color="#8b4cdd"
          onPress={modalAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          modalAddGoalHandler={modalAddGoalHandler}
          visible={modalIsVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={coarseGoals}
            renderItem={(itemData) => (
              <GoalItem
                onDeleteGoal={deleteGoalHandler.bind(this, itemData.item.id)}
                text={itemData.item.text}
              />
            )}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 7,
  },
});
