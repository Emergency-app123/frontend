import React, { useState } from "react";
import { View, Text } from "react-native";

import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const UserNotification = ({ userProfilePicture, User, NotificationMsg }) => {
  return (
    <Card>
      <UserProfilePicture>
        {!userProfilePicture && (
          <MaterialCommunityIcons
            name="account-circle"
            size={48}
            color="white"
          />
        )}
      </UserProfilePicture>
      <NotificationInfo>
        <UserName>{User}</UserName>
        <NotificationMessage>{NotificationMsg}</NotificationMessage>
      </NotificationInfo>
    </Card>
  );
};

const Notifications = ({ navigation }) => {
  return (
    <Container>
      <UserNotification User="Someone" NotificationMsg="Incident Reported!" />
      <UserNotification User="Someone" NotificationMsg="Incident Reported!" />
      <UserNotification User="Someone" NotificationMsg="Incident Reported!" />
      <UserNotification User="Someone" NotificationMsg="Incident Reported!" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 25px 15px;
`;

const Card = styled.View`
  flex-direction: row;
  margin-bottom: 25px;
  padding: 25px 15px;
  background-color: gray;
  border-radius: 5px;
`;
const UserProfilePicture = styled.View`
  justify-content: center;
  align-items: center;
`;

const NotificationInfo = styled.View`
  justify-content: center;
  padding: 0 15px;
`;

const UserName = styled.Text`
  font-size: 24px;
  color: white;
`;

const NotificationMessage = styled.Text`
  font-size: 16px;
  color: white;
`;

export default Notifications;
