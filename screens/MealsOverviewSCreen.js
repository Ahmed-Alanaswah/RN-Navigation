import { View, StyleSheet, FlatList, Text, Image } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy_data";
import { useLayoutEffect } from "react";

function MealsOverviewSCreen({ route, navigation }) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const detailsMeals = MEALS.filter((mealItem) => {
    if (mealItem.categoryIds.indexOf(catId) >= 0) {
      return mealItem.ingredients;
    }
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id == catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    function pressHandler() {
      navigation.navigate("DetailScreen", {
        categoryId: itemData.item.id,
      });
    }
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
      ingredients: item.ingredients,
    };
    return <MealItem {...mealItemProps} onPress={pressHandler} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewSCreen;
4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
