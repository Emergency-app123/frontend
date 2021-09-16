import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from "../../../assets/colors/colors";
import DefaultTextInput from "../../../components/textinput";
import DefaultButton from "../../../components/button";

const ChangeContact = ({ navigation }) => {
  const [oldContact, setOldContact] = useState();
  const [newContact, setNewContact] = useState();

  const [error, setError] = useState({
    oldContactError: "",
    newContactError: "",
  });

  const handleSubmit = () => {
    if (!oldContact || oldContact.length !== 10) {
      setError((prev) => {
        return {
          ...prev,
          oldContactError: "Please enter a valid contact",
        };
      });
    }

    if (!newContact) {
      setError((prev) => {
        return {
          ...prev,
          newContactError: "Please enter a valid contact",
        };
      });
    }

    if (error.oldContactError == null && error.newContactError == null) {
      console.log("Error: " + error);
      navigation.navigate("Change Contact Successful");
    }
  };

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
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <ErrorMessage>{error.oldContactError}</ErrorMessage>
              <DefaultTextInput
                saveState={(text) => {
                  setOldContact(text);

                  if (text !== "") {
                    setError((prev) => {
                      return { ...prev, oldContactError: null };
                    });
                  } else {
                    setError((prev) => {
                      return {
                        ...prev,
                        oldContactError: "This field is required.",
                      };
                    });
                  }
                }}
                value={oldContact}
                placeholder="Old Contact"
                maxLength={10}
                keyboardType="numeric"
              />

              <ErrorMessage>{error.newContactError}</ErrorMessage>
              <DefaultTextInput
                saveState={(text) => {
                  setNewContact(text);

                  if (text.length !== 10) {
                    setError((prev) => {
                      return {
                        ...prev,
                        newContactError: "This field is required.",
                      };
                    });
                  }

                  if (text !== "") {
                    setError((prev) => {
                      return { ...prev, newContactError: null };
                    });
                  } else {
                    setError((prev) => {
                      return {
                        ...prev,
                        newContactError: "This field is required.",
                      };
                    });
                  }
                }}
                value={newContact}
                placeholder="New Contact"
                maxLength={10}
                keyboardType="numeric"
              />

              <DefaultButton onPress={handleSubmit}>Submit</DefaultButton>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Form>
    </Container>
  );
};

const Container = styled.ScrollView`
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
  margin-top: 125px;
  flex: 1;
  justify-content: center;
  height: 100%;
`;

const ErrorMessage = styled.Text`
  margin-bottom: 5px;
  margin-left: 25px;
  color: red;
  font-size: 14px;
`;

export default ChangeContact;
