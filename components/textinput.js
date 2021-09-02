import React from "react";
import { TextInput } from "react-native";

import colors from "../assets/colors/colors";

import styled from "styled-components/native";

const DefaultTextInput = ({
  fieldType,
  saveState,
  placeholder,
  keyboardType,
  secureTextEntry,
}) => {
  return (
    <DefaultTextInputContainer
      onChangeText={saveState}
      value={fieldType}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
};

const DefaultTextInputContainer = styled.TextInput`
  margin: 0 0 25px 0;
  padding: 14px 25px;
  border: 2px solid ${colors.primary};
  border-radius: 50px;
`;

export default DefaultTextInput;
