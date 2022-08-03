import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AppStackRoutes } from "./routes";
import { NavigationContainer } from "@react-navigation/native";
import DetailsScreen from "../screens/DetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import { Colors } from "../theme/colors";
import NextIcon from "../icons/NextIcon";
import { StyleSheet, View } from "react-native";

export type AppStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: {
    country: string;
  };
};

const { Navigator, Screen } = createStackNavigator<AppStackParamList>();

const baseOptions = {
  headerBackTitleStyle: { color: Colors.eucalyptus },
  headerStyle: { backgroundColor: Colors.shark, shadowColor: "transparent" },
  headerBackImage: () => (
    <View style={styles.backIcon}>
      <NextIcon color={Colors.eucalyptus} size={30} />
    </View>
  ),
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={baseOptions}>
        <Screen
          options={{ headerShown: false }}
          name={AppStackRoutes.HomeScreen}
          component={HomeScreen}
        />
        <Screen
          name={AppStackRoutes.DetailsScreen}
          component={DetailsScreen}
          options={{ headerBackTitle: "Back" }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    marginLeft: 20,
    transform: [{ rotate: "180deg" }],
  },
});

export default AppNavigator;
