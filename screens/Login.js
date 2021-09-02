import React from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DefaultTextInput from "../components/textinput";
import DefaultButton from "../components/button";
import LoginIllustration from "../assets/images/LoginIllustration.png";

const Login = ({ navigation }) => {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <LoginContainer>
      <Heading>Login to the Emergency App</Heading>
      <LoginIllustrationContainer source={LoginIllustration} />

      <LoginForm>
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
                onChangeText={onChangePassword}
                value={password}
                placeholder="Password"
                secureTextEntry={true}
              />

              <DefaultButton
                onPress={() => {
                  navigation.navigate("Dashboard");
                }}
              >
                Login
              </DefaultButton>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </LoginForm>
    </LoginContainer>
  );
};

const LoginContainer = styled.View`
  flex: 1;
  align-items: center;
  padding: 50px 15px;
`;

const Heading = styled.Text`
  font-size: 24px;
`;

const LoginIllustrationContainer = styled.Image`
  margin: 25px 0;
`;

const LoginForm = styled.View`
  padding: 50px 0;
  width: 100%;
`;

export default Login;
