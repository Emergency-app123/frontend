import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import colors from "./assets/colors/colors";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import EmergencyContact from "./screens/EmergencyContact";
import SignUpSuccessful from "./screens/SignUpSuccessful";
import Dashboard from "./screens/Dashboard";
import CameraApplication from "./screens/Camera";

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "700",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Sign Up" component={SignUp} />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Sign In" }}
        />

        <Stack.Screen name="Emergency Contacts" component={EmergencyContact} />

        <Stack.Screen name="Sign Up Successful" component={SignUpSuccessful} />

        <Stack.Screen name="Dashboard" component={Dashboard} />

        <Stack.Screen
          name="Camera Application"
          component={CameraApplication}
          options={{ title: "Camera" }}
        />
      </Stack.Navigator>
      <StatusBar style="dark" />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.primary,
    textAlign: "center",
  },
});
