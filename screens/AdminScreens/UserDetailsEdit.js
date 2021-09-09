import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components";
import colors from "../../assets/colors/colors";
import DefaultTextInput from "../../components/textinput";
import DefaultButton from "../../components/button";

const UserDetailsEdit = ({ navigation }) => {
  const [username, onChangeUsername] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [contact, onChangeContact] = React.useState("");

  return (
    <Container>
      <Appbar>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Admin Drawer");
          }}
        >
          <MaterialCommunityIcons name="menu" size={48} color={colors.black} />
        </TouchableOpacity>
      </Appbar>

      <Heading>Edit User Details</Heading>
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
                maxLength={16}
                spellCheck={false}
              />

              <DefaultTextInput
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Email"
                keyboardType="email-address"
              />

              <DefaultTextInput
                onChangeText={onChangeContact}
                value={contact}
                placeholder="Contact"
                keyboardType="numeric"
                maxLength={10}
              />

              <DefaultButton
                onPress={() => {
                  navigation.navigate("User Detail Successful");
                }}
              >
                Update
              </DefaultButton>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SignUpForm>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 50px 15px;
`;

const Appbar = styled.View`
  padding: 25px 0;
  width: 100%;
`;

const Heading = styled.Text`
  margin-bottom: 25px;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

const SignUpForm = styled.View`
  padding: 50px 0;
  width: 100%;
`;

export default UserDetailsEdit;
