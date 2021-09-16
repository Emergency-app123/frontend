import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import DefaultButton from "../components/button";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Card from "../components/card";

const Dashboard = ({ navigation }) => {
  return (
    <DashboardContainer>
      <Appbar>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Drawer");
          }}
        >
          <MaterialCommunityIcons name="menu" size={48} color={colors.black} />
        </TouchableOpacity>
      </Appbar>
      <Header>
        <Title>Welcome</Title>
        <MaterialCommunityIcons
          name="ambulance"
          size={96}
          color={colors.black}
        />
      </Header>
      <CardContainer>
        <Card
          title="Report Incident"
          subtitle="Use camera to report incident."
          icon="camera"
          onPress={() => {
            navigation.navigate("Camera Application");
          }}
        />

        <Card
          title="Upload Location"
          subtitle="Upload location to report incident."
          icon="near-me"
          onPress={() => {
            navigation.navigate("User Location");
          }}
        />

        <Card
          title="Health Details"
          subtitle="Upload Health Details."
          icon="heart"
          onPress={() => {
            navigation.navigate("Health Details");
          }}
        />

        <Card
          title="Emergency Details"
          subtitle="Provide Details of Emergency."
          icon="ambulance"
          onPress={() => {
            navigation.navigate("Emergency Details");
          }}
        />

        <DefaultButton
          onPress={() => {
            navigation.navigate("Incident Reported");
          }}
        >
          Submit
        </DefaultButton>
      </CardContainer>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.View`
  flex: 1;
  padding: 25px 15px;
`;

const Appbar = styled.View`
  position: absolute;
  top: 75px;
  left: 25px;
  /* padding: 25px 0; */
  height: 56px;
`;

const Header = styled.View`
  margin-top: 50px;
  height: 25%;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`;

const CardContainer = styled.View`
  height: 65%;
  justify-content: space-evenly;
`;

export default Dashboard;
