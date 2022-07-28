import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";
import CategoriesScreen from "./screens/CatregoriesScreen";
import MealsOverviewSCreen from "./screens/MealsOverviewSCreen";
import DetailScreen from "./screens/DeatailScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewSCreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
