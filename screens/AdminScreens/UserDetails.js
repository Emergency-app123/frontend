import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DataTable } from "react-native-paper";
import styled from "styled-components/native";
import colors from "../../assets/colors/colors";

const UserDetails = ({ navigation }) => {
  const tempUserData = [
    {
      key: 0,
      username: "someone",
      email: "someone@somehwere.com",
      contact: 1234567890,
      password: "password",
    },
    {
      key: 1,
      username: "another one",
      email: "another.one@somehwere.com",
      contact: 1234567890,
      password: "password",
    },
  ];

  const UserDetailsRow = ({ username, email, contact, password }) => {
    return (
      <DataTable.Row>
        <DataTable.Cell>{username}</DataTable.Cell>
        <DataTable.Cell>{email}</DataTable.Cell>
        <DataTable.Cell numeric>{contact}</DataTable.Cell>
        <DataTable.Cell>{password}</DataTable.Cell>
        <DataTable.Cell>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("User Edit");
            }}
          >
            <MaterialCommunityIcons
              name="square-edit-outline"
              size={24}
              color={colors.black}
            />
          </TouchableOpacity>
        </DataTable.Cell>
      </DataTable.Row>
    );
  };

  return (
    <Container>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Username</DataTable.Title>
          <DataTable.Title>Email</DataTable.Title>
          <DataTable.Title>Contact</DataTable.Title>
          <DataTable.Title>Password</DataTable.Title>
          <DataTable.Title>Edit</DataTable.Title>
        </DataTable.Header>

        {tempUserData.map((user) => (
          <UserDetailsRow
            key={user.key}
            username={user.username}
            email={user.email}
            contact={user.contact}
            password={user.password}
          />
        ))}
      </DataTable>
    </Container>
  );
};

const Container = styled.View``;

export default UserDetails;
