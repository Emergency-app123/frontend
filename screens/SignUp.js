import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DefaultTextInput from "../components/textinput";
import DefaultButton from "../components/button";

const SignUp = ({ navigation }) => {
  const [username, onChangeUsername] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [contact, onChangeContact] = React.useState("");
  const [photo, onChangePhoto] = React.useState("");

  return (
    <SignUpContainer>
      <Heading>Sign Up to the Emergency App</Heading>
      <MaterialCommunityIcons name="ambulance" size={64} />
      <SignUpForm>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <DefaultTextInput
                onChangeText={onChangeUsername}
                value={username}
                placeholder="Username"
              />
              <DefaultTextInput
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Email"
              />
              <DefaultTextInput
                onChangeText={onChangePassword}
                value={password}
                placeholder="Password"
                secureTextEntry={true}
              />
              <DefaultTextInput
                onChangeText={onChangeContact}
                value={contact}
                placeholder="Contact"
              />
              <DefaultTextInput
                onChangeText={onChangePhoto}
                value={photo}
                placeholder="Photo"
              />

              <DefaultButton
                onPress={() => {
                  navigation.navigate("Sign Up Successful");
                }}
              >
                Sign Up
              </DefaultButton>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SignUpForm>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.View`
  flex: 1;
  align-items: center;
  padding: 50px 15px;
`;

const Heading = styled.Text`
  font-size: 24px;
  text-align: center;
`;

const SignUpForm = styled.View`
  padding: 50px 0;
  width: 100%;
`;

export default SignUp;
