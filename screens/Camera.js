import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";

import { Camera } from "expo-camera";
import CameraPreview from "../components/CameraPreview";

const CameraApplication = ({ navigation: { goBack } }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  let camera = null;

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

  const __takePicture = async () => {
    if (camera) {
      let photo = await camera.takePictureAsync();
      console.log(photo);
      setPreviewVisible(true);
      setCapturedImage(photo);
    }
  };

  return (
    <Container>
      {previewVisible && capturedImage ? (
        <CameraPreview photo={capturedImage} />
      ) : (
        <Camera style={styles.cameraFrame} ref={(camera) => (camera = camera)}>
          <BottomContainer>
            <BottomButton onPress={() => goBack()}>
              <MaterialCommunityIcons
                name="keyboard-backspace"
                size={36}
                color={colors.white}
              />
            </BottomButton>

            <BottomButton onPress={__takePicture}>
              <MaterialCommunityIcons
                name="checkbox-blank-circle"
                size={64}
                color={colors.white}
              />
            </BottomButton>

            <BottomButton
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <MaterialCommunityIcons name="" size={36} color={colors.white} />
            </BottomButton>
          </BottomContainer>
        </Camera>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const BottomContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
`;

const BottomButton = styled.TouchableOpacity`
  padding: 10px 15px;
  background-color: transparent;
  border-radius: 5px;
`;

const styles = StyleSheet.create({
  cameraFrame: {
    flex: 1,
    width: "100%",
  },
});

export default CameraApplication;
