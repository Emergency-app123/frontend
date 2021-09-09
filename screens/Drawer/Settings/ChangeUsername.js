import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from "../../../assets/colors/colors";
import DefaultTextInput from "../../../components/textinput";
import DefaultButton from "../../../components/button";

const ChangeUsername = ({ navigation }) => {
  const [oldUsername, setOldUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [confirmUsername, setConfirmUsername] = useState("");

  return (
    <Container>
      <Appbar>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="arrow-left"
            size={48}
            color={colors.black}
            onPress={() => {
              navigation.navigate("Drawer");
            }}
          />
        </TouchableOpacity>
        <Title>Change Username</Title>
      </Appbar>

      <Form>
        <DefaultTextInput
          onChangeText={setOldUsername}
          value={oldUsername}
          placeholder="Old Username"
          maxLength={32}
          keyboardType="default"
        />

        <DefaultTextInput
          onChangeText={setNewUsername}
          value={newUsername}
          placeholder="New Username"
          maxLength={32}
          keyboardType="default"
        />

        <DefaultTextInput
          onChangeText={setConfirmUsername}
          value={confirmUsername}
          placeholder="Confirm Username"
          maxLength={32}
          keyboardType="default"
        />

        <DefaultButton
          onPress={() => {
            navigation.navigate("Change Username Successful");
          }}
        >
          Submit
        </DefaultButton>
      </Form>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 50px 15px 0 15px;
`;

const Appbar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0 25px;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;
  text-align: right;
`;

const Form = styled.View`
  justify-content: center;
  height: 100%;
`;

export default ChangeUsername;
