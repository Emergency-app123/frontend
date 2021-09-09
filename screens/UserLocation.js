import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import * as Location from "expo-location";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapView, { Callout, Marker, Circle } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import colors from "../assets/colors/colors";

const UserLocation = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [pin, setPin] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });

  const [region, setRegion] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <View style={styles.container}>
          <GooglePlacesAutocomplete
            style={styles.search}
            placeholder="Search"
            fetchDetails={true}
            currentLocation={true}
            currentLocationLabel="Current location"
            GooglePlacesSearchQuery={{
              rankby: "distance",
            }}
            currentLocation={true}
            onPress={(data, details = null) => {
              console.log(data, details);
              setRegion({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              });
            }}
            query={{
              key: "API KEY",
              language: "en",
              location: `${region.latitude}, ${region.longitude}`,
            }}
          />

          <MapView
            style={styles.mapContainer}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: region.latitude,
                longitude: region.longitude,
              }}
            />

            <Marker
              coordinate={pin}
              pinColor={colors.primary}
              draggable={true}
              onDragStart={(e) => {}}
              onDragEnd={(e) => {
                setPin({
                  latitude: e.nativeEvent.coordinate.latitude,
                  longitude: e.nativeEvent.coordinate.longitude,
                });
              }}
            >
              <Callout>
                <Text>Your Location</Text>
              </Callout>
            </Marker>
            <Circle center={pin} radius={1000} />
          </MapView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 56,
  },

  search: {
    flex: 0,
    zIndex: 999,
  },

  mapContainer: {
    position: "absolute",
    top: 100,
    width: "100%",
    height: Dimensions.get("window").height - 56,
    zIndex: 0,
  },
});

export default UserLocation;
