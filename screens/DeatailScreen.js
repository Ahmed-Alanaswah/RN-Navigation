import { useLayoutEffect } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy_data";
import SubTitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
function DetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => {
    return meal.id == mealId;
  });
  function headerButtonPressHandler() {
    console.log("pressed");
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealDetails
          duration={selectedMeal.duration}
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
          textStyle={styles.detailText}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>ingredients</SubTitle>
          <List data={selectedMeal.ingredients} />
          <SubTitle>ingredients</SubTitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default DetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 12,
    color: "white",
    textAlign: "center",
  },

  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
