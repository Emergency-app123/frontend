import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../assets/colors/colors";
import DefaultButton from "../../components/button";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Card from "../../components/card";

const AdminDashboard = ({ navigation }) => {
  return (
    <DashboardContainer>
      <Appbar>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Admin Drawer");
          }}
        >
          <MaterialCommunityIcons name="menu" size={48} color={colors.black} />
        </TouchableOpacity>
      </Appbar>
      <Header>
        <Title>Welcome Admin</Title>
        <MaterialCommunityIcons
          name="ambulance"
          size={96}
          color={colors.black}
        />
      </Header>
      <CardContainer>
        <Card
          title="User Details"
          subtitle="Check details of all users"
          icon="account"
          onPress={() => {
            navigation.navigate("User Details");
          }}
        />

        <Card
          title="Notifications"
          subtitle="Check user notifications"
          icon="bell"
          onPress={() => {
            navigation.navigate("Notifications");
          }}
        />
      </CardContainer>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.View`
  flex: 1;
  padding: 25px 15px;
`;

const Appbar = styled.View`
  padding: 25px 0;
  height: 56px;
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
  height: 50%;
  justify-content: space-evenly;
`;

export default AdminDashboard;