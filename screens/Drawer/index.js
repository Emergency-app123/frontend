import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from "../../assets/colors/colors";
import Card from "../../components/card";

const Drawer = ({ navigation }) => {
  return (
    <Container>
      <Appbar>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Dashboard");
          }}
        >
          <MaterialCommunityIcons name="close" size={48} color={colors.black} />
        </TouchableOpacity>
      </Appbar>

      <CardContainer>
        <Card
          title="Dashboard"
          onPress={() => {
            navigation.navigate("Dashboard");
          }}
          icon="view-dashboard"
        />

        <Card
          title="Settings"
          onPress={() => {
            navigation.navigate("Settings");
          }}
          icon="cog"
        />

        <Card
          title="Log Out"
          onPress={() => {
            navigation.navigate("Home");
          }}
          icon="power"
        />
      </CardContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 50px 15px;
`;

const Appbar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const CardContainer = styled.View`
  justify-content: space-evenly;
  height: 50%;
`;

export default Drawer;
