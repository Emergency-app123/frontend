import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from "../assets/colors/colors";
import DefaultTextInput from "../components/textinput";
import DefaultButton from "../components/button";

const HealthDetails = ({ navigation }) => {
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState();
  const [primaryContactNumber, setPrimaryContactNumber] = useState();
  const [secondaryContactNumber, setSecondaryContactNumber] = useState();
  const [nearHospitalLocation, setNearHospitalLocation] = useState("");

  return (
    <Container>
      <Appbar>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="arrow-left"
            size={48}
            color={colors.black}
            onPress={() => {
              navigation.navigate("Dashboard");
            }}
          />
        </TouchableOpacity>
      </Appbar>

      <Header>
        <Title>Emergency Details</Title>
        <MaterialCommunityIcons name="plus" size={96} color={colors.black} />
      </Header>

      <Form>
        <DefaultTextInput
          onChangeText={setContactName}
          value={contactName}
          placeholder="Contact Name"
          maxLength={32}
          keyboardType="default"
        />

        <DefaultTextInput
          onChangeText={setContactNumber}
          value={contactNumber}
          placeholder="Contact Number"
          maxLength={32}
          keyboardType="numeric"
        />

        <DefaultTextInput
          onChangeText={setPrimaryContactNumber}
          value={primaryContactNumber}
          placeholder="Primary Contact Number"
          maxLength={4}
          keyboardType="default"
        />

        <DefaultTextInput
          onChangeText={setSecondaryContactNumber}
          value={secondaryContactNumber}
          placeholder="Secondary Contact Number"
          maxLength={32}
          keyboardType="default"
        />

        <DefaultTextInput
          onChangeText={setNearHospitalLocation}
          value={nearHospitalLocation}
          placeholder="Near Hospital Location"
          maxLength={32}
          keyboardType="default"
        />

        <DefaultButton
          onPress={() => {
            navigation.navigate("Emergency Details Failed");
          }}
        >
          Submit
        </DefaultButton>

        {/* <DefaultButton
          onPress={() => {
            navigation.navigate("Emergency Details Added Successful");
          }}
        >
          Submit
        </DefaultButton> */}
      </Form>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 50px 15px 0 15px;
`;

const Appbar = styled.View`
  padding: 25px 0;
  margin-bottom: 25px;
  height: 56px;
`;

const Header = styled.View`
  height: 25%;
  align-items: center;
  justify-content: space-evenly;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`;

const Form = styled.View`
  height: 65%;
`;

export default HealthDetails;
