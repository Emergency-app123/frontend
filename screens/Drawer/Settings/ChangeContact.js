import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from "../../../assets/colors/colors";
import DefaultTextInput from "../../../components/textinput";
import DefaultButton from "../../../components/button";

const ChangeContact = ({ navigation }) => {
  const [oldContact, setOldContact] = useState();
  const [newContact, setNewContact] = useState();

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
        <Title>Change Contact</Title>
      </Appbar>

      <Form>
        <DefaultTextInput
          onChangeText={setOldContact}
          value={oldContact}
          placeholder="Old Contact"
          maxLength={10}
          keyboardType="numeric"
        />

        <DefaultTextInput
          onChangeText={setNewContact}
          value={newContact}
          placeholder="New Contact"
          maxLength={10}
          keyboardType="numeric"
        />

        <DefaultButton
          onPress={() => {
            navigation.navigate("Change Contact Successful");
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

export default ChangeContact;
