import React, { useState, useEffect } from "react";
import { View, Text, Image, Button } from "react-native";

import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DefaultButton from "../components/button";

const ImagePickerScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <Container>
      <Title>Almost there...</Title>
      {!image && (
        <View>
          <DefaultButton onPress={pickImage}>
            Pick an image from camera roll
          </DefaultButton>
        </View>
      )}

      {image && (
        <ImagePreviewContainer>
          <ImagePreview source={{ uri: image }} />
          <View style={{ marginTop: 50 }}>
            <DefaultButton
              onPress={() => {
                navigation.navigate("Sign Up Successful");
              }}
            >
              Next
            </DefaultButton>
          </View>
        </ImagePreviewContainer>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

const Title = styled.Text`
  margin-bottom: 50px;
  font-size: 32px;
  text-align: center;
`;

const ImagePreviewContainer = styled.View`
  width: 75%;
  height: 50%;
`;

const ImagePreview = styled.Image`
  width: 100%;
  height: 75%;
`;

export default ImagePickerScreen;
