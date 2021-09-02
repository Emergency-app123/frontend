import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import colors from "../assets/colors/colors";

const CameraApplication = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Container>
      <Camera style={styles.cameraFrame} type={type}>
        <ButtonContainer>
          <FlipButton
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <MaterialCommunityIcons
              name="camera-switch"
              size={48}
              color={colors.white}
            />
          </FlipButton>
        </ButtonContainer>
      </Camera>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
`;

const FlipButton = styled.TouchableOpacity`
  padding: 10px 15px;
  background-color: transparent;
  border-radius: 5px;
`;

const styles = StyleSheet.create({
  cameraFrame: {
    flex: 1,
  },
});

export default CameraApplication;
