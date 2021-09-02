import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Card from "../components/card";

const Dashboard = ({ navigation }) => {
  return (
    <DashboardContainer>
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
        />

        <Card
          title="Health Details"
          subtitle="Upload Health Details."
          icon="heart"
        />

        <Card
          title="Emergency Details"
          subtitle="Provide Details of Emergency."
          icon="ambulance"
        />
      </CardContainer>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.View`
  flex: 1;
  padding: 25px 15px;
`;

const Header = styled.View`
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
  height: 75%;
  justify-content: space-evenly;
`;

export default Dashboard;
