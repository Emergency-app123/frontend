import React, { useState } from "react";
import {
	ScrollView,
	View,
	Text,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Formik } from "formik";
import * as yup from "yup";

import colors from "../assets/colors/colors";
import DefaultTextInput from "../components/textinput";
import DefaultButton from "../components/button";

const ValidationSchema = yup.object({
	contactName: yup.string().required("Please enter contact's name"),
	contactNumber: yup
		.string()
		.required("Please enter a contact")
		.test("isValidContact", "Please enter a valid contact", (value) => {
			return parseInt(value) !== 10;
		}),
	insuranceNumber: yup.string().required("Please enter the insurance number"),
	bloodGroup: yup
		.string()
		.matches(/^(A|B|AB|O)[+-]$/i, "Please enter a valid blood group")
		.required("Please enter the blood group"),
});

const HealthDetails = ({ navigation }) => {
	return (
		<Container>
			<Appbar>
				<TouchableOpacity>
					<MaterialCommunityIcons
						name="arrow-left"
						size={48}
						color={colors.black}
						onPress={() => {
							navigation.navigate("Dashboard");
						}}
					/>
				</TouchableOpacity>
			</Appbar>

			<Header>
				<Title>Health Details</Title>
				<MaterialCommunityIcons name="ambulance" size={96} color={colors.black} />
			</Header>

			<Form>
				<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<Formik
							validationSchema={ValidationSchema}
							initialValues={{
								contactName: "",
								contactNumber: "",
								insuranceNumber: "",
								bloodGroup: "",
							}}
							onSubmit={(values) => {
								console.log(values);
								navigation.navigate("Health Details Added Successful");
							}}>
							{({ handleChange, handleSubmit, values, touched, errors }) => (
								<View>
									<ErrorMessage>{touched.contactName && errors.contactName}</ErrorMessage>

									<DefaultTextInput
										autoCapitalize="words"
										saveState={handleChange("contactName")}
										value={values.contactName}
										placeholder="Contact Name"
										keyboardType="default"
										maxLength={32}
									/>

									<ErrorMessage>{touched.contactNumber && errors.contactNumber}</ErrorMessage>
									<DefaultTextInput
										autoCapitalize="none"
										saveState={handleChange("contactNumber")}
										value={values.contactNumber}
										placeholder="Contact Number"
										keyboardType="numeric"
										maxLength={10}
									/>

									<ErrorMessage>{touched.insuranceNumber && errors.insuranceNumber}</ErrorMessage>
									<DefaultTextInput
										autoCapitalize="characters"
										saveState={handleChange("insuranceNumber")}
										value={values.insuranceNumber}
										placeholder="Insurance Number"
										maxLength={16}
									/>

									<ErrorMessage>{touched.bloodGroup && errors.bloodGroup}</ErrorMessage>
									<DefaultTextInput
										autoCapitalize="characterse"
										saveState={handleChange("bloodGroup")}
										value={values.bloodGroup}
										placeholder="Blood Group"
										maxLength={3}
									/>

									<DefaultButton onPress={handleSubmit}>Login</DefaultButton>
								</View>
							)}
						</Formik>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			</Form>
		</Container>
	);
};

const Container = styled.ScrollView`
	flex: 1;
	padding: 0 15px;
`;

const Appbar = styled.View`
	position: absolute;
	top: 50px;
	left: 25px;
	padding: 25px 0;
	height: 56px;
`;

const Header = styled.View`
	margin-top: 100px;
	padding: 50px 0;
	align-items: center;
	justify-content: space-evenly;
`;

const Title = styled.Text`
	font-size: 32px;
	font-weight: 700;
	text-align: center;
`;

const Form = styled.View`
	height: 100%;
`;

const ErrorMessage = styled.Text`
	margin-bottom: 5px;
	margin-left: 25px;
	color: red;
	font-size: 14px;
`;

export default HealthDetails;
