import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy_data";

function CategoriesScreen({ navigation }) {
  function renderCategory(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategory}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
